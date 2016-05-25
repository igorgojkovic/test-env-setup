exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['todo-spec.js'],
    specs: ['bulk-spec.js'],
    multiCapabilities: [ 
        {
            browserName: 'firefox'
        },
        {
            browserName: 'chrome'
        }
    ]
};