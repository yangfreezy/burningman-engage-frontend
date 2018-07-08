var spawn   = require('child_process').spawn;
var express = require('express');
var app     = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  // https://stackoverflow.com/questions/16592851/run-bash-script-with-node-from-client-request
  var command = spawn(__dirname + '/scripts/main.sh', [ req.query.move || '' ]);
  var output  = [];

  console.log(req.query.move);

  command.stdout.on('data', function(chunk) {
    output.push(chunk);
  });

  command.on('close', function(code) {
    if (code === 0)
      res.send(Buffer.concat(output));
    else
      res.send(500); // when the script fails, generate a Server Error HTTP response
  });
});

const PORT = 3001;
app.listen(PORT);
console.log(`listening http://localhost:${PORT}`);
