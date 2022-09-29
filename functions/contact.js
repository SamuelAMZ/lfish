const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context) => {
  sgMail.setApiKey(
    "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"
  );

  const msg = {
    to: "samueldev09@gmail.com",
    from: "ticklme@tickl.ch", // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail.send(msg).then(
    () => {
      return {
        statusCode: 200,
        body: JSON.stringify("success"),
      };
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};
