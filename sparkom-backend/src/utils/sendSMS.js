const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendSMS = async (verifCode, phone) => {
  const response = await client.messages.create({
    body: `Your Verification code is ${verifCode}`,
    from: "+14422410062",
    to: phone,
  });
  console.log(response);
};

module.exports = sendSMS;
