pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "node -v"
                sh "npm -v"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy to s3") {
            steps {
                
                sh "echo $pwd"
                sh "$pwd/build/./  s3://bitsgoufront --recursive"
                
            }
        }
    }
}