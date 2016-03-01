class HomeController {
	constructor(RandomNames) {
		"use strict";
		this.name = 'Name';
		this.randomNames = RandomNames;
	}

	changeName() {
		"use strict";
		this.name = 'NewName';
	}

	getRandomName() {
		"use strict";
		this.name = this.randomNames.getName();
	}
}
