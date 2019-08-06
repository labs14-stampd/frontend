module.exports = {
  // All imported modules in your tests should be mocked automatically
  automock: true,

  // Stop running tests after `n` failures
  bail: 1,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Displays the current testing suite name beside each test as it runs
  displayName: 'Stampd Client',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Whether to use watchman for file crawling
  watchman: true
};
