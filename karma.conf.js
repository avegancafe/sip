module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'mocha'],
    files: [
      'dist/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};