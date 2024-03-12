module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'ignorePatterns': ['.eslintrc.js'],
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'prettier/recommended'
    ],
    'rules': {
        'prettier/prettier': [
        'error',
            {
                'endOfLine': 'auto'
            },
        ],
    }
}
