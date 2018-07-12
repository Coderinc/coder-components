module.exports = {
  env: {
    jest: true,
  },
  extends: 'airbnb',
  rules: {
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any', 'array'],
      },
    ],
  },
};
