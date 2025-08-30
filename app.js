const express = require('express');
const { Usuario } = require('./models');

const app = express();
app.use(express.json());

app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'Servidor funcionando correctamente' });
});

app.listen(3000, () => {
    console.log('Servidor ejecutando en http://localhost:3000');
});