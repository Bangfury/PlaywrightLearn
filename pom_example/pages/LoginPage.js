import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions.js';

export default class loginPage {
    constructor(page) {
		this.actions = new CommonActions(page)
        this.usernameSelector = '#username'
	}

    async navigate(){
		await this.actions.navigate('https://the-internet.herokuapp.com/login');
    }

    async login(username, password){
        await this.actions.fill('#username', username);
        await this.actions.fill('#password', password);
        await this.actions.click('button[type="submit"]');
    }

    async verifyLoginSuccess(){
        const successMessage = await this.actions.getText('#flash');
        expect(successMessage).toContain('You logged into a secure area!');
    }

    async getErrorMessage(){
        return await this.actions.getText('#flash');
    }

    async assertErrorMessage(expectedMessage){
        const acutalMessage = await this.getErrorMessage();
        expect(acutalMessage).toContain(expectedMessage);
    }
}