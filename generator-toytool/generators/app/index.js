//const _extend = require("lodash/extend");
var Generator = require('yeoman-generator');
//_extend(Generator.prototype, require("yeoman-generator/lib/actions/install"));

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
      }

    
    async initPackage() {
        let answer = await this.prompt([
            {
              type: "input",
              name: "name",
              message: "Your project name",
              default: this.appname // Default to current folder name
        }])

        const pkgJson = {
            "name": answer.name,
            "version": "1.0.0",
            "description": "",
            "main": "generators/app/index.js",
            "scripts": {
              "build": "webpack",
              "test": "mocha  --require @babel/register",
              "coverage": "nyc mocha"
            },
            "author": "",
            "license": "ISC",
        
            "devDependencies": {
              
            },
            "dependencies": {
            }
          };
      
          // Extend or create package.json file in destination path
          this.fs.extendJSON(this.destinationPath('package.json'), pkgJson); 
          this.npmInstall(["vue@2.5.16"], { 'save-dev': false });
          this.npmInstall(["webpack@4.37.0", "webpack-cli@3.3.8", "vue-loader@15.0.12", "vue-style-loader@4.1.3", 
              "babel-loader@8.2.1",
              "babel-plugin-istanbul@6.0.0", "@istanbuljs/nyc-config-babel@3.0.0", 
              "mocha@8.2.1", "nyc@15.1.0", 
              "@babel/core@7.12.7", "@babel/preset-env@7.12.7", "@babel/register@7.12.1", 
              "css-loader@3.2.0", "vue-template-compiler@2.5.16", "copy-webpack-plugin@6.3.2"], 
              { 'save-dev': true });
          console.log(this.templatePath('sample-test.js'));
          this.fs.copyTpl(
            this.templatePath('sample-test.js'),
            this.destinationPath('test/sample-test.js'),
            {}
          );
    
          this.fs.copyTpl(
            this.templatePath('.babelrc'),
            this.destinationPath('.babelrc'),
            {}
          );

          this.fs.copyTpl(
            this.templatePath('.nycrc'),
            this.destinationPath('.nycrc'),
            {}
          );

          this.fs.copyTpl(
            this.templatePath('HelloWord.vue'),
            this.destinationPath('src/HelloWord.vue'),
            {}
          );
          this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
          );
          this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js')
          );
          this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            {title: answer.name}
          );
    }

};