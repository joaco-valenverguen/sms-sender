require("dotenv").config();

const acountSID = process.env.ACCOUNT_SID;
const authtoken = process.env.AUTH_TOKEN;
const phonenumber = process.env.MY_PHONE_NUMBER;
const client = require("twilio")(acountSID, authtoken);

client.messages
  .create({
    to: phonenumber,
    from: "+19126666736",
    body: "Hello World",
  })
  .then((message) => console.log(message.sid));
