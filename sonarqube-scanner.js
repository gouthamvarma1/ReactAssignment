const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://ec2-54-91-9-152.compute-1.amazonaws.com/",
  //login:"admin",
  //password:"4WNxM2ReQN8r",
  options: {
    "sonar.sources": "./src"
  },
},
() => process.exit()
);