module.exports = {
  results:
    [ { filePath: 'path/to/error.js',
        messages:
          [ { ruleId: 'no-unused-vars',
              severity: 2,
              message: 'foo is defined but never used',
              line: 1,
              column: 4,
              nodeType: 'Identifier',
              source: 'var foo;' } ],
         errorCount: 1,
         warningCount: 0 } ],
    errorCount: 1,
    warningCount: 0 }
