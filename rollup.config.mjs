export default {
  input: 'index.js',
  output: {
    file: 'index.cjs',
    format: 'cjs'
  },
  external: ['object-sizeof', 'uuid', 'crypto', 'lodash', 'moment', 'path']
};
