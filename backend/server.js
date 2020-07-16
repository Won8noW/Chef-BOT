const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/recipe', function (req, res) {
 return res.json({
 	title: 'This is how you make meatballs',
	text: 'Take meat and roll into a ball. Fry on medium heat for 1337 seconds. Serve with lingonberries'
 });
});

app.listen(process.env.PORT || 8080);
