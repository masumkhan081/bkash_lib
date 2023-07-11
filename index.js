const axios = require("axios")
const dotenv = require('dotenv').config();
const Bkash = require("./Bkash")
const express=require('express');
const app = express();
//

const username=process.env.USER_NAME;
const password=process.env.PASSWORD;
const app_key=process.env.APP_KEY;
const app_secret=process.env.APP_SECRET;
const merchant_wallet = process.env.NUMBER;
const base_url = process.env.BASE_URL;
const merchantAssociationInfo = process.env.merchantAssociationInfo;
//

const bkash = new Bkash(username,password,app_key,app_secret,merchant_wallet,base_url);


app.listen(3000,()=>{
    console.log("running ..")
})


app.get("/",(req,res)=>{
    const { paymentID, status } = req.query;
    
})
app.get("/agreement",(req,res)=>{

})
//


/*

url = https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant
Number: 01770618575
Pin:12345
Payment pin:12121
//
username    = "sandboxTokenizedUser02"
    password    = "sandboxTokenizedUser02@12345"
    appKey      = "4f6o0cjiki2rfm34kfdadl1eqq"
    appSecret   = "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b"

*/
