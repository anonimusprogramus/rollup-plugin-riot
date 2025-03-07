var Fourth = {
  'css': null,

  'exports': {
    message: 'Hello!'
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<p expr6><!----></p>', [{
      'redundantAttribute': 'expr6',
      'selector': '[expr6]',

      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,

        'evaluate': function(scope) {
          return scope.message;
        }
      }]
    }]);
  },

  'name': 'fourth'
};

export default Fourth;
