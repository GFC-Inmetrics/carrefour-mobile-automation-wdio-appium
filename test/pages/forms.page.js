import { $, $$ } from '@wdio/globals';


class FormsPage {

    get footerFormsButton(){
        return $('~Forms');
    }

    get typeSomethingField(){
        return $('~text-input');
    }
    async fillTypeSomethingField(typeSomething) {
        await this.typeSomethingField.waitForExist({ timeout: 5000 });
        await this.typeSomethingField.setValue(typeSomething);
    }

    get haveTypedField(){
        return $('~input-text-result');
    }
    async fillHaveTypedField(haveTyped){
        await this.haveTypedField.waitForExist({ timeout: 5000 });
        await this.haveTypedField.setValue(haveTyped);
    }

       get switchButton() {
        return $('~switch');
    }

    get switchText() {
        return $('~switch-text');
    }

    async toggleSwitch() {
        await this.switchButton.waitForExist({ timeout: 5000 });
        await this.switchButton.click();
    }

    async isSwitchOn() {
        const checked = await this.switchButton.getAttribute('checked');
        return checked === 'true';
    }

    async getSwitchText() {
        await this.switchText.waitForExist({ timeout: 5000 });
        return await this.switchText.getText();
    }

   
    async fillAndValidateTypeSomethingField(text) {
        await this.fillTypeSomethingField(text);
        const typedText = await this.haveTypedField.getText();
        return typedText === text;
    }

    // --- Dropdown ---
    get dropdownButton() {
        return $('~Dropdown');
    }

    async openDropdown() {
        await this.dropdownButton.waitForExist({ timeout: 5000 });
        await this.dropdownButton.click();
    }

    async selectDropdownOption(optionText) {
        const option = $(`//android.widget.CheckedTextView[@text="${optionText}"]`);
        await option.waitForExist({ timeout: 5000 });
        await option.click();
    }

    // Ativação de Botão

    get ActiveButton(){
        return $('~button-Active')
    }

    async getActiveButton(){
        await this.ActiveButton.waitForExist({ timeout: 5000});
        await this.ActiveButton.click();
    }

    get confirmationActivedMessage(){
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    get okOptionActivedMessage(){
        return $('id=android:id/button1');
    }

    async getConfirmationActivedMessage(){
        await this.confirmationActivedMessage.waitForExist({ timeout: 5000});
        const message = await this.confirmationActivedMessage.getText();
        console.log('Mensagem de cadastro de botão é exibida: ', message);

        await this.okOptionActivedMessage.click();
    }

}

export default new FormsPage();















