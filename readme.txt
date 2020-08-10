Cucumber with Nodejs
1. install yeoman with "npm install -g yo"
2. install cucumber generator with "npm install -g generator-cucumber generator-cucumber-step-definitions"
2.1 npm install got
2.2 npm install assert
2.3 npm install node-fetch
2.4 npm install build-url
3. create project folder 
4. go to project folder
5. new terminal or command prompt and go to your project folder and run "yo cucumber"
6. create package.json with "npm init --yes"
6. install dependency with "npm install zombie cucumber --save-dev"
7. in package.json find "test" keyword and replace value with "cucumber-js"
8. run "npm test" in terminal or command prompt. 
    if you error you can generate sample.steps.js with "yo cucumber-step-definitions" and you defind path of feature file for generated.