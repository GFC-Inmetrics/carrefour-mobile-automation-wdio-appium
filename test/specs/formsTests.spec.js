const { expect } = require('@wdio/globals');


import FormsPage from '../pages/forms.page.js';

describe('Forms Page Tests', () => {

    before(async () => {
        await FormsPage.footerFormsButton.waitForExist({ timeout: 5000 });
        await FormsPage.footerFormsButton.click();
    });

    it('Validar preenchimento do campo "Type something" com espelhamento no campo "You have typed"', async () => {
        const text = "Testando texto";
        await FormsPage.fillTypeSomethingField(text);

        const displayedText = await FormsPage.haveTypedField.getText();
        expect(displayedText).toEqual(text);
    });

    it('Validar alternação de texto e estado em campo switch', async () => {
        await FormsPage.footerFormsButton.click();
    
        // Alterna o switch
        await FormsPage.toggleSwitch();
    
        // Verifica estado
        const isOn = await FormsPage.isSwitchOn();
        expect(isOn).toBe(true);
    
        // Verifica texto exibido
        const switchText = await FormsPage.getSwitchText();
        expect(switchText).toBe("Click to turn the switch OFF");
    });
    

    it('Validar opção: "webdriver.io is awesome" de dropdown forms', async () => {
        await FormsPage.openDropdown();
        await FormsPage.selectDropdownOption("webdriver.io is awesome");
    });

    it('Validar opção: "Appium is awesome" de dropdown forms', async () => {
        await FormsPage.openDropdown();
        await FormsPage.selectDropdownOption("Appium is awesome");
    });

    it('Validar opção: "This app is awesome" de dropdown forms', async () => {
        await FormsPage.openDropdown();
        await FormsPage.selectDropdownOption("This app is awesome");
    });

    it('Validar cadastro de forms', async () => {
        const text = "Teste Cadastro Forms";
        await FormsPage.fillTypeSomethingField(text);

        const displayedText = await FormsPage.haveTypedField.getText();
        expect(displayedText).toEqual(text);

        await FormsPage.toggleSwitch();
        await FormsPage.openDropdown();
        await FormsPage.selectDropdownOption("webdriver.io is awesome");
        
        await FormsPage.getActiveButton();
        await expect(FormsPage.confirmationActivedMessage).toBeDisplayed();
        await FormsPage.getConfirmationActivedMessage();
});


});