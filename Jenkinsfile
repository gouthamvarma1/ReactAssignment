pipeline {
     agent any
     stages {
        stage("Build") {
            steps {

            //ec2 instance need to have node js installed by default
                sh "node -v"
                sh "npm -v"
                sh "npm install"
                sh "npm run build"
            }
        }

        stage("Deploy to ec2-Instace") {
            steps {

               sh "echo pushing build to ec2 Instance"
               sh "scp -i /home/ubuntu/keys/bits-ec2.pem  $pwd/workspace/frontend/build/./  ubuntu@3.89.212.234:/home/ubuntu/frontend/"
                
            }
        }

        stage("Run Automation Suite") {
            steps {

               sh"echo Need To Implement Automation"
                
            }
        }
        stage("Deploy to s3") {
            steps {
                //Ec2 instance need to have aws cli installed
                sh "aws s3 cp $pwd/workspace/frontend/build/./  s3://bitsgoufront --recursive"
                
            }
        }
    }
}