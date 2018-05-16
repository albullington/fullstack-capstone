
module.exports.Script = item => `
  <script src="/dist/bundle.js"></script>
  <script>
  ReactDOM.hydrate(
    React.createElement(${item}),
    document.getElementById('root')
  );
  </script>
`;
