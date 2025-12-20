import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';
import CommonActions from '../utils/CommonActions.js';

export default class loginPage {
    constructor(page) {
		this.actions = new CommonActions(page)
	}

    async navigate(){
		await this.actions.navigate('https://the-internet.herokuapp.com/login');
    }

    async login(username, password){
        await this.actions.fill('#username', username);
        await this.actions.fill('#password', password);
        await this.actions.click('button[type="submit"]');
    }