var First = {
  'css': null,

  'exports': {
    message: 'Hello!'
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<p expr1><!----></p>', [{
      'redundantAttribute': 'expr1',
      'selector': '[expr1]',

      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,

        'evaluate': function(scope) {
          return scope.message;
        }
      }]
    }]);
  },

  'name': 'first'
};

var Second = {
  'css': null,

  'exports': {
    message: 'Hello!'
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<p expr2><!----></p>', [{
      'redundantAttribute': 'expr2',
      'selector': '[expr2]',

      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,

        'evaluate': function(scope) {
          return scope.message;
        }
      }]
    }]);
  },

  'name': 'second'
};

var multiple = {
  First,
  Second
};

export default multiple;
