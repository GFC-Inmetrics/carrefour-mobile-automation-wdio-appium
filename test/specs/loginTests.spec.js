// /// <reference types="@wdio/globals/types" />

  //   <reference types="@wdio/globals/types" />
  const { expect } = require('@wdio/globals');


  const LoginPage = require('../pages/login.page');


describe('Sign Up', () => {
    it('Validar Cadastro de usuário', async () => {
        await LoginPage.clickFooterLogin();
        await LoginPage.clickSignUp();
        await LoginPage.signUp('guilhermetest@test.com', 'Teste@123', 'Teste@123');
        await LoginPage.signUpBtn();
        await expect(LoginPage.alertSignUpTitle).toBeDisplayed();
        const message = await LoginPage.alertSignUpMessage.getText();
        console.log('Mensagem de cadastro realizado: ', message);
        await LoginPage.alertSignUpOkButton();

    });

    it ('Validar alerta para email incorreto', async () => {
        await LoginPage.clickFooterLogin();
        await LoginPage.clickSignUp();
        await LoginPage.signUp('guilhermetest@@test.com', 'Teste@123', 'Teste@123');
        await LoginPage.signUpBtn();
        await LoginPage.invalidEmailMessage.waitForDisplayed({ timeout: 10000 });
        expect(await LoginPage.invalidEmailMessage.isDisplayed()).toBe(true);
        const message = await LoginPage.invalidEmailMessage.getText();
        console.log('Mensagem de proibição é exibida:', message);
        
    });


    it ('Validar alerta de caracteres em campo Password', async () => {
        await LoginPage.clickFooterLogin();
        await LoginPage.clickSignUp();
        await LoginPage.signUp('guilhermetest@test.com', 'Teste', 'Teste');
        await LoginPage.signUpBtn();
        expect (await LoginPage.passwordCharactersAlert.waitForDisplayed()).toBe(true);
        const message = await LoginPage.passwordCharactersAlert.getText();
        console.log('Mensagem de quantidade de caracteres minima é exibida:', message);
    });

    it ('Validar alerta de incompatibilidade de Password', async () => {
        await LoginPage.clickFooterLogin();
        await LoginPage.clickSignUp();
        await LoginPage.signUp('guilhermetest@test.com', 'Teste', 'Test');
        await LoginPage.signUpBtn();
        expect (await LoginPage.passwordEqualsAlert.waitForDisplayed()).toBe(true);
        const message = await LoginPage.passwordEqualsAlert.getText();
        console.log('Mensagem de quantidade de caracteres minima é exibida:', message)
    });

});   

    describe ('Log in', () => {
    it ('Validar login', async () => {
        await LoginPage.clickFooterLogin();
        await LoginPage.logInTitleButton.click();
        await LoginPage.logIn('guilhermetest@test.com', 'Teste@123');
        await LoginPage.loginBtnConfirmation.click();
        expect (await LoginPage.loginMessageSuccess.waitForDisplayed()).toBe(true);
        const message = await LoginPage.loginMessageSuccess.getText();
        console.log('Mensagem de sucesso é exida:', message)
        await LoginPage.getAlertOkButton();
    }); 



});
