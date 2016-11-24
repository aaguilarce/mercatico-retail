const express = require('express'),
      path    = require('path'),
      app     = express();

// Set default port
app.set('port', process.env.PORT || 8080);

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Run server
app.listen(process.env.PORT || 8080, (err) => {
  console.log('Example app listening on port ' + process.env.PORT || 8080);
});
