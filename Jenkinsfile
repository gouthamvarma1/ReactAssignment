pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
            
                sh "ls"
                sh "which node"
                sh "apt update"
                sh "apt install nodejs"
                sh "apt install npm"
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