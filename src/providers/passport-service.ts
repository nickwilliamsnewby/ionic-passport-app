import { Injectable } from '@angular/core';

import { GlobalServiceProvider } from './global-service';

@Injectable()
export class PassportServiceProvider {

	loginUrl = '/login';
	refreshUrl = '/login/refresh';
	registerUrl = '/register';
	
	constructor(public global: GlobalServiceProvider) {
		console.log('Hello PassportServiceProvider Provider');
	}

}
