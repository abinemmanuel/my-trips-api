
// For a details regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: '<rootDir>/reports/coverage',

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ['json-summary', 'lcov', 'text', 'text-summary'],

    // An array of file extensions your modules use
    moduleFileExtensions: ['js'],

    // Use this configuration option to add custom reporters to Jest
    reporters: ['default', ['jest-junit', { outputDirectory: 'reports', outputName: 'junit.xml' }]],

    // The root directory that Jest should scan for tests and modules within
    rootDir: __dirname,

    // The test environment that will be used for testing
    testEnvironment: 'node',

}

