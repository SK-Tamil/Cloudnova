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
        withSonarQubeEnv('SonarQube') {
            sh '''
            sonar-scanner
            '''
        }
    }
}

        stage('Build React') {
            steps {
                echo 'Building React application...'
                sh 'npm run build'
            }
        }

    }

    post {
        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }
    }
}
