const express = require('express')
const app = express()
app.use(express.static('./dist/'));
app.get('/*', function(req, res) {
 res.sendFile('index.html', {root: 'dist/'}
 );
});
const port = 3000;
app.listen(process.env.PORT || 3000), () => {
 console.log(`Example app listening at http://localhost:${port}`)
}
