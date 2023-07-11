const axios = require("axios");


async function req_handler(base_url, method, headers, data, payerReference) { // all that supposed to be shared
    let merchant_and_bkash = {}
    //
    const config = {
        method,
        url: base_url + "/token/grant",
        data,
        headers
    }
    let resp = await axios(config);
    merchant_and_bkash.id_token = resp.data.id_token;
    merchant_and_bkash.refresh_token = resp.data.refresh_token;

    // to get payment id - create agreement phase
    config.headers = {
        Authorization: merchant_and_bkash.id_token,
        "X-App-Key": data.app_key
    }
    config.data = {
        mode: "0000",
        payerReference,
        callbackURL: "http://localhost:3000/",
        amount: "0",
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: "something..."
    }
    config.url = base_url + "/create";
    resp = await axios(config);
    merchant_and_bkash.paymentID = resp.data.paymentID;
    merchant_and_bkash.bkashURL = resp.data.bkashURL

    // to get agreement id - execute agreement
    config.data = {
        paymentID: resp.data.paymentID
    }

    console.log(resp.data)

    config.url = base_url + "/execute"
    // config.url = resp.data.bkashURL + "/tokenized/checkout/execute"

    resp = await axios(config);


    console.log(JSON.stringify(resp.data))
    // merchant_and_bkash.paymentID = resp.data.paymentID;

    // console.log(config)
    // console.log(merchant_and_bkash)

    // console.log(JSON.stringify(resp.data))
    // return res.data;
    return merchant_and_bkash;
}

module.exports = req_handler;
