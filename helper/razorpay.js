var Razorpay = require("razorpay");
var bodyParser = require("body-parser");

let instance = new Razorpay({
  key_id: "rzp_test_VApgKSkheZDlct", // your `KEY_ID`
  key_secret: "fNfzdOuSKwLmCFEvJUMfyDQS", // your `KEY_SECRET`
});

module.exports = instance;
