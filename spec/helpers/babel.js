require('babel-polyfill');
require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});
require.extensions['.css'] = () => {
  return;
};
require.extensions['.svg'] = () => {
  return '';
};
