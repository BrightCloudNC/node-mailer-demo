import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465 connection use SSL , false for other ports
  auth: {
    user: "<EMAIL>",
    pass: "<PASSWORD>",
  },
});
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: '"Server Express" <express@example.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    // text: text, // plain text body
    // html: "<b>Hello world?</b>", // html body
    attachments: [
      {
        filename: "test.pdf",
        path: "./test.pdf",
        contentType: "application/pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      throw Error(err);
    }
    console.log(
      "Message sent: %s\nSMTP response: %s",
      info.messageId,
      info.response
    );
  });
  return;
};

export default sendEmail;
