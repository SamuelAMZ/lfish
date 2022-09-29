const axios = require("axios");

exports.handler = async (event, context) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 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",
  };

  axios
    .post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [
          {
            to: [{ email: "samueldev09@gmail.com", name: "John Doe" }],
            subject: "Hello, World!",
          },
        ],
        content: [{ type: "text/plain", value: "Heya!" }],
        from: { email: "ticklme@tickl.ch", name: "lfish" },
        reply_to: { email: "ticklme@tickl.ch", name: "lfish reply" },
      },
      { headers: headers }
    )
    .then(function (response) {
      console.log(response);
      return {
        statusCode: 200,
        body: JSON.stringify("success"),
      };
    })
    .catch(function (error) {
      console.log(error);

      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
