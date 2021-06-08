pipeline {
     agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
     stages {
        stage("Build") {
            steps {
               
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}