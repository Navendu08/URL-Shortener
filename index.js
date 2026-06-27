const express=require('express');
const app=express();
const port=8000;
const url=require('./routes/url');
const connectDB=require('./connect');
connectDB('mongodb://localhost:27017/urlshortner');

app.use(express.json());
app.use('/url',url);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});