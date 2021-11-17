const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../', 'dist')));

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));