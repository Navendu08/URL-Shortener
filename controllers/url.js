const{nanoid}=require("nanoid");
const URL=require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body=req.body;
    if(!body.redirectUrl){
        return res.status(400).json({error:"redirectUrl is required"});
    }
     const shortId=nanoid(8);

     await URL.create({
        shortId:shortId,
        redirectUrl:body.redirectUrl,
        visitHistory:[]
     });
    // Further implementation for handling short URL creation

return res.status(201).json({shortId:shortId});
    }

module.exports={handleGenerateNewShortURL};