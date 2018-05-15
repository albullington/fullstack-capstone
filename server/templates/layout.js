module.exports.Layout = ({ body, styles, title }) => `
<!doctype html>
<html>
<head>
    <title>${title}</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"> <!-- load bootstrap css -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
    <div id='root'>${body}</div>
    <style>
        body        { padding-top:80px; }
    </style>
</head>
<body>
<div class="container">
    <style>
      ${styles}
  </style>
  </div>
  </body>
  </html>
`;
