
const I = actor();

module.exports = {

    // setting locators
    elements: {
        balance: '#__layout > div > div:nth-child(2) > header > div.user-box > div > span > strong',
        logo: 'a.logo.logo-device.nuxt-link-active > img',
        userProfile: 'div.common-side.right-side > form > div:nth-child(2) > input'
    },

    url: {
        sign: '/signup?email='
    },

    fields: {
        registration: '//*[@id="__BVID__32"]/div/div[2]/div[2]/div/form/div/input',
        email: '#email'
    },

    Buttons: {
        registrationModal: 'div > form > button',
    },

    // introducing methods
    registrationEmail(email) {
        I.fillField(this.fields.registration, email);
        I.click(this.Buttons.registrationModal);
        I.wait(2);
        I.seeInCurrentUrl(this.url.sign);
        I.seeInField(this.fields.email, email);
    },

};