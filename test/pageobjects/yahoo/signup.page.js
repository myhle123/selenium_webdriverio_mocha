const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    // fld = new firstNameField;


    get logoYahoo() {
        return $("img[class='logo yahoo-en-US']");
    }
    get header() {
        return $(".challenge-heading")
    }

    //First Name
    get inputFirstName() {
        return $("#usernamereg-firstName");
    }
    get labelFirstName() {
        return $("label[for='usernamereg-firstName']");
    }
    get errorFirstName() {
        return $("#reg-error-firstName");
    }
    //Last Name
    get inputLastName() {
        return $("#usernamereg-lastName");
    }

    get errorLastName() {
        return $("#reg-error-lastName");
    }

    get inputUserId() {
        return $("#usernamereg-userId");
    }
    get labelUserId() {
        return $("label[for='usernamereg-userId']");
    }
    get labelDomainId() {
        return $(".yid-domain");
    }
    get errorUserId() {
        return $("#reg-error-userId");
    }
    get inputPassword() {
        return $("#usernamereg-password");
    }
    get labelPassword() {
        return $("label[for='usernamereg-password']");
    }
    get btnShowPassword() {
        return $("#usernamereg-show-button");
    }
    get errorPassword() {
        return $("#reg-error-password");
    }
    get labelDateOfBirth() {
        return $(".reg-dob");
    }
    get inputMonth() {
        return $("#usernamereg-month");
    }

    get errorBirthDate() {
        return $("#reg-error-birthDate");
    }
    get inputDay() {
        return $("#usernamereg-day");
    }
    get inputYear() {
        return $("#usernamereg-year");
    }
    get labelNote() {
        return $(".tos-text");
    }

    get btnContinue() {
        return $("#reg-submit-button");
    }
    get labelOr_Cont() {
        return $(".or-cont-with-desc.challenge-feedback-text");
    }
    get btnGoogle() {
        return $("#tpa-google-button");
    }
    get btnMyEmail() {
        return $("#tpa-myemail-button");
    }
    get labelSignIn() {
        return $(".ureg-sign-in.txt-align-center");
    }

    open() {
        return super.open();

    }
}

module.exports = new SignUpPage();
