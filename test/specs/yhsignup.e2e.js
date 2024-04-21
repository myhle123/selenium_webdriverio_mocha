const { expect, assert } = require('@wdio/globals')
const HomePage = require('../pageobjects/yahoo/home.page')
const SignInPage = require('../pageobjects/yahoo/signin.page')
const SignUpPage = require('../pageobjects/yahoo/signup.page')


before(async () => {
    await HomePage.open();
    await HomePage.btnSignIn.click();
    await SignInPage.btnCreate.click();
});

describe('Create new account', () => {

    it('Label contains word: Full name', async () => {
        await expect(SignUpPage.labelFirstName).toHaveTextContaining('Full name');
        await expect(SignUpPage.labelUserId).toHaveTextContaining('New Yahoo email');
        await expect(SignUpPage.labelDomainId).toHaveTextContaining('@yahoo.com');
        await expect(SignUpPage.labelPassword).toHaveTextContaining('Password');
        await expect(SignUpPage.btnShowPassword).toBeExisting();
        await expect(SignUpPage.labelDateOfBirth).toHaveTextContaining('Date of birth');
        //await expect(((await SignUpPage.inputMonth).getText())).toHaveTextContaining('Months');
        const value = await SignUpPage.inputMonth.getValue();
        // console.log(value);
        var actual = []
        var actual = (await SignUpPage.inputMonth)

        await expect(actual).toHaveChildren(13);
        //ok
        // const text = await $$('#usernamereg-month')[0]
        // const mytext = await text.$$('option')[3]
        // await expect(mytext).toHaveText('March')
        // //ok
        // const text1 = await SignUpPage.inputMonth[0]
        // await expect(text1).toHaveText('March')

        //await browser.debug()
        await browser.pause(30000);
    });
    // it('First name is required ', async () => {
    //     // await HomePage.open();
    //     // await HomePage.btnSignIn.click();
    //     // await SignUpPage.btnCreate.click();
    //     await SignUpPage.btnContinue.click();

    //     await expect(SignUpPage.errorFirstName).toBeExisting();
    //     await expect(SignUpPage.errorFirstName).toHaveTextContaining('This is required.')
    //     //await browser.pause(3000);
    // });
    // it('Last name is required ', async () => {
    //     await expect(SignUpPage.errorLastName).toBeExisting();
    //     await expect(SignUpPage.errorLastName).toHaveTextContaining('This is required.')
    //     //await browser.pause(3000);
    // });
    // it('Email is required ', async () => {
    //     await expect(SignUpPage.errorUserId).toBeExisting();
    //     await expect(SignUpPage.errorUserId).toHaveTextContaining('This is required.')
    //     //await browser.pause(3000);
    // });
    // it('Passwork is required ', async () => {
    //     await expect(SignUpPage.errorPassword).toBeExisting();
    //     await expect(SignUpPage.errorPassword).toHaveTextContaining('This is required.')
    //     // await browser.pause(3000);
    // });
    // it('Date of birth is required ', async () => {
    //     await expect(SignUpPage.errorBirthDate).toBeExisting();
    //     await expect(SignUpPage.errorBirthDate).toHaveTextContaining('This is required.')
    //     //await browser.pause(3000);
    // });
    // it('Email should start with a letter', async () => {

    //     //username has to start with a letter
    //     await SignUpPage.inputUserId.setValue('1myle');
    //     await signupPage.inputPassword.setValue('asd!@#123');
    //     await expect(SignUpPage.errorUserId).toBeExisting();
    //     await expect(SignUpPage.errorUserId).toHaveTextContaining('Your username has to start with a letter.')
    //     await browser.pause(1000);
    // });
    // it('Email too short', async () => {
    //     await SignUpPage.inputUserId.setValue('my');
    //     await signupPage.inputPassword.setValue('asd!@#456');
    //     await expect(SignUpPage.errorUserId).toBeExisting();
    //     await expect(SignUpPage.errorUserId).toHaveTextContaining('That email address is too short, please use a longer one.')
    //     await browser.pause(1000);
    // });
    // it('Email already axists', async () => {
    //     await SignUpPage.inputUserId.setValue('hoangmy303');
    //     await signupPage.inputPassword.setValue('asd!@#456');
    //     await expect(SignUpPage.errorUserId).toBeExisting();
    //     await expect(SignUpPage.errorUserId).toHaveTextContaining('A Yahoo account already exists with this email address.')
    //     await browser.pause(1000);
    // });

})


