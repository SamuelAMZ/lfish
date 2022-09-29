const axios = require("axios");

exports.handler = async (event, context) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
  };

  axios
    .post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [
          {
            to: [{ email: "samuelthedev09@gmail.com", name: "John Doe" }],
            subject: "Hello, World!",
          },
        ],
        content: [{ type: "text/plain", value: "Heyad!" }],
        from: { email: "ticklme@tickl.ch", name: "lfish" },
        reply_to: { email: "ticklme@tickl.ch", name: "lfish reply" },
      },
      config
    )
    .then(function (response) {
      console.log({ response, mes: "success" });
      return {
        statusCode: 200,
        body: JSON.stringify("success"),
      };
    })
    .catch(function (error) {
      console.log({ error, err: "erorrr" });

      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
