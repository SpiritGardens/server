const Express = require('express');
const app = Express();

app.use(Express.json());

app.get('/', (req, res) => {
    res.send('Server up and running, Boss!');
});

const Auth = require('./authentication');

app.post('/login', (req, res) => {
    Auth
        .logInWithEmailPassword(req.body.email, req.body.password)
        .catch(err => res.send(`Failed to login: ${err.message}`));
});

app.post('/admin/add-team-member', (req, res) => {
    Auth.registerUserWithEmailPassword(req,body.email, req.body.password)
        .catch(err => res.send(`Failed to add team member: ${err.message}`));
});

app.post('/resend-confirmation-email', (req, res) => {
    Auth
        .resendConfirmationEmail(req.body.email)
        .catch(err => res.send(`Failed to resend confirmation email: ${err.message}`));
})

app.post('/confirm-email/:token/:tokenId', (req, res) => {
    Auth
        .confirmUserWithEmailPassword(req.params.token, req.params.tokenId)
        .catch(err => res.send(`Failed to confirm email address: ${err.message}`));
})

app.post('/forgot-password', (req, res) => {
    Auth
        .sendResetPasswordEmail(req.body.email)
        .catch(err => res.send(`Failed to send email containing url to reset password: ${err.message}`));
});

app.post('/complete-password-reset/:token/:tokenId', (req, res) => {
    Auth
        .completePasswordReset(req.body.newPassword, req.params.token, req.params.tokenId)
        .catch(err => res.send(`Failed to reset password: ${err.message}`));
});



app.listen(process.env.PORT || 8001, () => console.log('Listening on port 8001'));