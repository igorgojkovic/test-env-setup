
// Karma example configuration file
// NOTE: To configure Karma tests, do the following:
//       1.  Copy this file and rename the copy with a .conf.js extension, for example:  karma.conf.js
//       2.  Configure the properties below in your conf.js copy
//       3.  Run your tests

module.exports = function(config){
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use - qunit
        frameworks: ['jasmine'],

        // List of files / patterns to load in the browser
        // Add any new src files to this list.
        // If you add new unit tests, they will be picked up automatically by Karma,
        // unless you've added them to a nested directory, in which case you should
        // add their paths to this list.
        files: [
            { pattern: 'bower_components/**/*.js', included: false },
            { pattern: 'dev/**/*.js', included: true },
            { pattern: 'tests/*Spec.js', included: true },
            { pattern: 'tests/**/*Spec.js', included: true },
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js'
        ],
        
        // list of files to exclude
        exclude: [
        
        ],
        
        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl' , 'coverage'
        reporters: ['progress'],
        
        // web server port
        port: 9876,
        
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        
        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,
        
        // Set autoWatch to true if you plan to run `grunt karma` continuously, to automatically test changes as you make them.
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome - installed with npm install karma-chrome-launcher --save-dev as plugin
        // - ChromeCanary
        // - Firefox - also like Chrome
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // Example usage:
        // browsers: [ 'Chrome', 'Firefox'],
        browsers: ['chrome_without_security'],
        customLaunchers: {
            chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000, 
        
          
        // Setting singleRun to true here will start up your specified browsers, run tests, and then shut down the browsers.
        // Helpful to have in a CI environment, where you don't want to leave browsers running continuously.
        // CONTINUES INTEGRATION
        singleRun: false


        // plugins: ['karma-qunit', 'karma-chrome-launcher'],

        // cli runner port
        // runnerPort: 9100,
    });
};
