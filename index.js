import express from 'express';

const app = express();

const PORT = 4000;

app.use(express.json())

app.listen(PORT,()=> {
    console.log(`app is listening ${PORT}`);
})