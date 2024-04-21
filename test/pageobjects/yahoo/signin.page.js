const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage extends Page {
    /**
     * define selectors using getter methods
     */


    get btnCreate() {
        return $('#createacc');
    }

}

module.exports = new SignInPage();
