const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola, somos Numa')
});

app.listen(3000, () => {
    console.log('Numa server running at http://localhost:3000');
})
