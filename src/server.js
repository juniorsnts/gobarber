import app from './app';

app.listen(3333, () => console.log(`servidor rodando: ${process.env.APP_URL}`));
