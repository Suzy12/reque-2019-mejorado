var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  ssl: true,
  auth: {
    user: 'sochino95@gmail.com',
    pass: 'clave'
    
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
},
});



var mailOptions = {
  from: 'sochino95@gmail.com',
  to: 'sochino95@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'mensaje de envio'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});



