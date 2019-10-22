var fs = require('fs');

fs.open('resume.html', 'w', function (err, file) {
  if (err) //throw err;
  console.log('Bye');
});
