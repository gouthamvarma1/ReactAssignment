pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "cd  /usr/local/bin"
                sh "ls"
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