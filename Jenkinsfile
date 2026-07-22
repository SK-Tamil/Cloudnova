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
        sh '''
        aws ecr get-login-password --region ap-southeast-1 | \
        docker login \
        --username AWS \
        --password-stdin 808872801655.dkr.ecr.ap-southeast-1.amazonaws.com

        docker tag react-app:latest \
        808872801655.dkr.ecr.ap-southeast-1.amazonaws.com/react-cicd:latest

        docker push \
        808872801655.dkr.ecr.ap-southeast-1.amazonaws.com/react-cicd:latest
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
