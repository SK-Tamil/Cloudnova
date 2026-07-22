pipeline {
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
