import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({ mensagem: 'Hello' });
});

app.post("/", (request, response) => {
    return response.json({ mensagem: 'Dados salvos'})
})

app.listen(3333, () => console.log('Server is running'));
