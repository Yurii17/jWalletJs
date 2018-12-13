
const I = actor();

module.exports = {

    // setting locators

    fields: {
        email: 'div.common-side.right-side > form > div:nth-child(1) > input',
        password: 'div.common-side.right-side > form > div:nth-child(2) > input'
    },

    Buttons: {
        profileModal: 'div:nth-child(2) > header > div.user-box > div > button',
        submitLogin: 'div.common-link-btn > button',
    },

    // introducing methods
    sendForm(email, password) {
        I.click(this.Buttons.profileModal);
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.password, password);
        I.click(this.Buttons.submitLogin);
    },

};
