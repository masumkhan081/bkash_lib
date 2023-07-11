const req_handler = require("./ReqHandler")


function Bkash(username, password, app_key, app_secret, merchant_wallet, base_url) {


    // this.id_token = ""
    // this.refresh_token = ""

    // grant token
    const headers = {
        username,
        password
    }
    const data = {
        app_key,
        app_secret
    }


    req_handler(base_url, "post", headers, data, merchant_wallet).then(resp => {
        //
        // this.id_token = resp.id_token;
        // this.refresh_token = resp.refresh_token
        //
        // console.log(resp)

    })

    // agreement = new Agreement(this);
    // payment = new Payment(this);
    // trx = new Transaction(this);

}


module.exports = Bkash;
