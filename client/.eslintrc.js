console.log(process.env);
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: '17.0.1',
    },
  },
  extends: [
    // 'plugin:react/recommended',
    // 'airbnb',
  ],
  globals: {
    module: true,
    emit: true,
    exports: true,
    artifacts: true,
    contract: true,
    Promise: true,
    it: true,
    assert: true,
    window: true,
    $: true,
    browser: true,
    describe: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md

    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,

    camelcase: [2, { // http://eslint.org/docs/rules/camelcase
      properties: 'never',
    }],
    'func-names': 2, // http://eslint.org/docs/rules/func-names
    'key-spacing': [2, { // http://eslint.org/docs/rules/key-spacing
      beforeColon: false,
      afterColon: true,
    }],
    'new-cap': [2, { // http://eslint.org/docs/rules/new-cap
      newIsCap: true,
      capIsNew: false,
    }],
    'no-multiple-empty-lines': [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
      max: 1,
      maxEOF: 1,
      maxBOF: 1,
    }],
    'no-nested-ternary': 2, // http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 2, // http://eslint.org/docs/rules/no-new-object
    'no-spaced-func': 2, // http://eslint.org/docs/rules/no-spaced-func
    'no-trailing-spaces': 2, // http://eslint.org/docs/rules/no-trailing-spaces
    'no-extra-parens': [2, 'functions'], // http://eslint.org/docs/rules/no-extra-parens
    'no-underscore-dangle': 0, // http://eslint.org/docs/rules/no-underscore-dangle
    'one-var': [2, 'never'], // http://eslint.org/docs/rules/one-var
    'padded-blocks': [2, 'never'], // http://eslint.org/docs/rules/padded-blocks
    semi: [2, 'always'], // http://eslint.org/docs/rules/semi
    'semi-spacing': [2, { // http://eslint.org/docs/rules/semi-spacing
      before: false,
      after: true,
    }],
    'keyword-spacing': 2, // http://eslint.org/docs/rules/keyword-spacing
    'space-before-blocks': 2, // http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2, 'never'], // http://eslint.org/docs/rules/space-before-function-paren
    'space-infix-ops': 2, // http://eslint.org/docs/rules/space-infix-ops
    'spaced-comment': 2, // http://eslint.org/docs/rules/spaced-comment

    'react/sort-comp': [2, { // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      order: [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        '/^_(?!(on|get|render))/',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'state',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        '/^_?on.+$/',
        '/^_?get.+$/',
        '/^_?render.+$/',
        'render',
      ],
    }],
  },
};
