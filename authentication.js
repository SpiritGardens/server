const Realm = require('realm');
const database = require('./database');

const logInWithEmailPassword = async (email, password) => {
 const credentials = Realm.Credentials.emailPassword(email, password);
 try {
     const user = await database.logIn(credentials);
     console.log(`Successfully logged in with id '${user.id}'`);
     return user;
 } catch (err) {
     console.error(`Failed to log in: ${err.message}`);
 }
};

const registerUserWithEmailPassword = async (email, password) => {
    const newUser = await database.emailPasswordAuth.registerUser(email, password);
    console.log(`Registered a new database user: ${newUser}`);
};

const resendConfirmationEmail = async (email) => {
    await database.emailPasswordAuth.resendConfirmationEmail(email);
    console.log('Confirmation email was resent, Boss!');
};

const confirmUserWithEmailPassword = async (token, tokenId) => {
    await database.emailPasswordAuth.confirmUser(token, tokenId);
    console.log('User has been confirmed, Boss!');
};

const sendResetPasswordEmail = async (email) => {
    await database.emailPasswordAuth.sendResetPasswordEmail(email);
    console.log('Reset password email was sent, Boss!');
};

const completePasswordReset = async (newPassword, token, tokenId) => {
    await database.emailPasswordAuth.resetPassword(newPassword, token, tokenId);
    console.log('Password has successfully been reset, Boss!');
}

module.exports = {
    logInWithEmailPassword,
    registerUserWithEmailPassword,
    resendConfirmationEmail,
    confirmUserWithEmailPassword,
    sendResetPasswordEmail,
    completePasswordReset
}