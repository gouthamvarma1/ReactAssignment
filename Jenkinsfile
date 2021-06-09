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

                sh "echo ${env.aws_access_key_id}"
                sh "echo ${env.aws_secret_access_key}"
                sh "echo ${env.aws_session_token}"
                sh export AWS_ACCESS_KEY_ID=${env.aws_access_key_id}
                sh export AWS_SECRET_ACCESS_KEY=${env.aws_secret_access_key}
                sh export AWS_SESSION_TOKEN=${env.aws_session_token}
                //sh aws ec2 describe-instances --region us-east1-
                sh "aws s3 cp $pwd/workspace/frontend/build/./  s3://bitsgoufront --recursive"
                
            }
        }
    }
}