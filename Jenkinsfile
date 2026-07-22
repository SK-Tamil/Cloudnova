pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running React Tests...'
                sh 'CI=true npm test -- --watchAll=false'
            }
        }

        stage('Build React') {
            steps {
                echo 'Building React application...'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                sh 'docker build -t react-app:latest .'
            }
        }

        stage('Trivy Scan') {
            steps {
                echo 'Scanning Docker Image...'
                sh '''
                    mkdir -p reports
                    trivy image react-app:latest > reports/trivy-report.txt
                '''
            }
        }

        stage('Push to ECR') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-ecr']]) {
                    sh '''
                    aws ecr get-login-password --region ap-southeast-1 | \
                    docker login --username AWS \
                    --password-stdin 808872801655.dkr.ecr.ap-southeast-1.amazonaws.com

                    docker tag react-app:latest \
                    808872801655.dkr.ecr.ap-southeast-1.amazonaws.com/react-cicd:latest

                    docker push \
                    808872801655.dkr.ecr.ap-southeast-1.amazonaws.com/react-cicd:latest
                    '''
                }
            }
        }

        stage('Deploy to Development') {
            steps {
                sh '''
                docker stop react-app || true
                docker rm react-app || true

                docker pull 808872801655.dkr.ecr.ap-southeast-1.amazonaws.com/react-cicd:latest

                docker run -d \
                  --name react-app \
                  -p 80:80 \
                  808872801655.dkr.ecr.ap-southeast-1.amazonaws.com/react-cicd:latest
                '''
            }
        }

        stage('Manual Approval') {
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    input message: 'Deploy to Production?', ok: 'Deploy'
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                sh '''
                docker stop react-prod || true
                docker rm react-prod || true

                docker pull 808872801655.dkr.ecr.ap-southeast-1.amazonaws.com/react-cicd:latest

                docker run -d \
                  --name react-prod \
                  -p 8080:80 \
                  808872801655.dkr.ecr.ap-southeast-1.amazonaws.com/react-cicd:latest
                '''
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking application health...'
                sh '''
                sleep 10

                STATUS=$(curl -o /dev/null -s -w "%{http_code}" http://localhost:8080)

                if [ "$STATUS" -eq 200 ]; then
                    echo "Application is healthy"
                else
                    echo "Health check failed"
                    exit 1
                fi
                '''
            }
        }
    }

    post {

        always {
            archiveArtifacts artifacts: 'reports/*', fingerprint: true
        }

        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }
    }
}
