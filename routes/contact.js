var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testmail1122@gmail.com',
            pass: 'Test@26850'
        }
    });

    var mailOptions = {
        from: 'Ram <ram@gmail.com>',
        to: 'testmail1122@gmail.com',
        subject: 'Website Submission',
        text: 'New Submission' + req.body.name + 'Email: ' + req.body.email + 'Message: ' + req.body.message,
        html: '<p>You got new submission.</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message:'+req.body.message+'</li></ul>'
    }
    
transporter.sendMail(mailOptions, function (error,info) {
    if (error) {
        console.log(error);
        res.redirect('/');
    } else {
        console.log('Message Sent: ' + info.response);
        res.redirect('/');
    }
})

})

module.exports = router;
