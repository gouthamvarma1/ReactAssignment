pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "/usr/local/bin/npm"
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