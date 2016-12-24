const express = require('express');
const app = express();

const VERIFY_TOKEN = '41aff886d32528f02297582f5463002a';

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/bots/money', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === VERIFY_TOKEN) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
