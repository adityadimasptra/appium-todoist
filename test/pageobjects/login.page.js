import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get todoistLogo () {
        return $('id:com.todoist:id/logo')
    }
    get loginWithGoogle () {
        return $('id:com.todoist:id/btn_google')
    }
    get continueWithEmail() {
        return $('id:com.todoist:id/btn_email')
    }
    get loginWithEmail() {
        return $('id:com.todoist:id/email_login')
    }
    get emailField() {
        return $('xpath://android.widget.EditText[@resource-id="email"]')
    }
    get passwordField() { 
        return $('xpath://android.widget.EditText[@resource-id="password"]')
    }
    get loginButton() {
        return $('xpath://android.view.View[@resource-id="auth_button_tag"]/android.widget.Button')
    }
    get chooseAccount () {
        return $('xpath:(//android.widget.LinearLayout[@resource-id="com.google.android.gms:id/container"])[1]');
    }
    get toolbar () {
        return $('id:com.todoist:id/toolbar');
    }
    async login () {
        await this.continueWithEmail.click()
        await this.loginWithEmail.click()
        await this.emailField.setValue(process.env.EMAIL)
        await this.passwordField.setValue(process.env.PASSWORD)
        await this.loginButton.click()
        await driver.waitUntil(async () => (await this.toolbar).isDisplayed(), {
            timeout: 6000,
            timeoutMsg: 'Toolbar not displayed'
        });
    }
}

export default new LoginPage();
