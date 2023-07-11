const Bkash = require("./Bkash");

const express = require("express")
const app = express()

//
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const app_key = process.env.APP_KEY;
const app_secret = process.env.APP_SECRET;
const merchant_wallet = process.env.NUMBER;
const base_url = process.env.BASE_URL;
const merchantAssociationInfo = process.env.merchantAssociationInfo;
//
const bkash = new Bkash(username, password, app_key, app_secret, base_url);
//
app.listen(3000, () => {
    console.log("running .. ")

})

app.get("", (req, res) => {})
