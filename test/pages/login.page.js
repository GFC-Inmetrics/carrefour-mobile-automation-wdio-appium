const { $, $$ } = require('@wdio/globals');

class LoginPage {


    get footerLoginButton() {
        return $('~Login');
       // return $('//android.widget.TextView[@text="Login"]');
    }

    get signUpButton() {
        return $('~button-sign-up-container');
    }

    get logInTitleButton() {
        return $('~button-login-container');
    }

    get loginBtnConfirmation(){
return $('~button-LOGIN');
    }
    
    get inputEmail() {
        return $('~input-email');
    }

    get inputPassword() {
        return $('~input-password');
    }

    get inputConfirmPassword() {
        return $('~input-repeat-password'); 
    }

    get submitSignUpButton() {
        return $('~button-SIGN UP'); 
    }

    get alertSignUpTitle() {
        return $('//*[@resource-id="android:id/alertTitle"]');
    }

    get alertSignUpMessage() {
        return $('//*[@resource-id="android:id/message"]'); 
    }

    get alertSignUpConfirmation() {
        return $('//*[@text="OK"]');
    }

    get alertOkButton() {
        return $('id=android:id/button1');
    }

    get invalidEmailMessage() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    get passwordCharactersAlert() {
         return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

    get passwordEqualsAlert(){
        return $ ('//android.widget.TextView[@text="Please enter the same password"]');
    }

    get loginMessageSuccess(){
        return $ ('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    async clickSignUp() {
        await this.signUpButton.waitForExist({ timeout: 5000 });
        await this.signUpButton.click();
    }

    async signUp(email, password, confirmPassword) {
        await this.inputEmail.waitForExist({ timeout: 5000 });
        await this.inputEmail.setValue(email);

        await this.inputPassword.waitForExist({ timeout: 5000 });
        await this.inputPassword.setValue(password);

        await this.inputConfirmPassword.waitForExist({ timeout: 5000 });
        await this.inputConfirmPassword.setValue(confirmPassword);
    }

    async logIn(email, password){
        await this.inputEmail.waitForExist({ timeout: 5000 });
        await this.inputEmail.click();

        await this.inputPassword.waitForExist({ timeout: 5000 });
        await this.inputPassword.setValue(password);
    }

    async signUpBtn() {
        await this.submitSignUpButton.waitForExist({ timeout: 5000 });
        await this.submitSignUpButton.click();
    }

    async alertSignUpOkButton() {
        await this.alertSignUpConfirmation.waitForExist({ timeout: 5000 });
        await this.alertSignUpConfirmation.click();
    }

    async clickFooterLogin() {
        await this.footerLoginButton.waitForExist({ timeout: 5000 });
        await this.footerLoginButton.click();
    }

    async getAlertOkButton(){
        await this.alertOkButton.waitForExist({ timeout: 5000 });
        await this.alertOkButton.click();
    }

}



module.exports = new LoginPage();
