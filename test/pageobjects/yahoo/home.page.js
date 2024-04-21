const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */


    get btnSignIn() {
        //xPath = //a[normalize-space()='Sign in']

        //a[text()='Sign in']
        // return $('#login-container > a');
        return $('//a[text()="Sign in"]');
    }



}

module.exports = new HomePage();
