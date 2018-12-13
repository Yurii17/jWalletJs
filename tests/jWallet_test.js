/// <reference path="./steps.d.ts" />

Feature('Switch Login');
Feature('Switch homePage');

const main = '/';

Before((I) => {
    I.amOnPage('/');
});

Scenario('Login', async (I) =>
{
    await I.waitForElement('a.logo.logo-device.nuxt-link-active > img');
    I.click('div:nth-child(2) > header > div.user-box > div > button');
    I.fillField('div.common-side.right-side > form > div:nth-child(1) > input', 'test4@test.jwallet' );
    I.fillField('div.common-side.right-side > form > div:nth-child(2) > input', 'Pw84584df5');
    I.click('div.common-link-btn > button');
    I.wait(4);
    I.seeInCurrentUrl('/account/news');
});

Scenario('login', (I, loginPage) => {
    loginPage.sendForm('test4@test.jwallet', 'Pw84584df5');
    I.wait(3);
    I.seeInCurrentUrl('/account/news');
});

Scenario('registrationEmail', (I, homePage) => {
    homePage.registrationEmail('test@gmail.com');
    I.wait(2);
});


Scenario('registration', async (I) =>
{
    await I.waitForElement('a.logo.logo-device.nuxt-link-active > img');
    I.fillField('//*[@id="__BVID__32"]/div/div[2]/div[2]/div/form/div/input', 'test@gmail.com');
    I.click('div > form > button');
    I.wait(2);
    I.seeInCurrentUrl('/signup?email=');
    I.seeInField('#email', 'test@gmail.com');
});















