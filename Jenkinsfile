pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
               
                sh "/usr/local/bin/npm install"
                sh " /usr/local/bin/npm run build"
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