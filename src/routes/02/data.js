export let data = {
	servicename: {
		name: "Tjänstens namn",
		min: 5,
		required: true,
		error: "Du måste fylla i tjänstens namn med minst 5 bokstäver."
	},
	description: {
		name: "Beskrivning",
		max: 200,
		required: true,
		error: "Du måste fylla i en beskrivning med max 200 bokstäver."
	},
	price: {
		name: "Kostnad",
		type: "number",
		required: true,
		error: "Du måste fylla i en kostnad med siffror."
	},
	email: {
		name: "Email",
		type: "email",
		required: true,
		error: "Du måste fylla i en mailaddress med @."
	},
	phone: {
		name: "Telefonnummer",
		type: "tel",
		required: false,
		error: "Du måste fylla i ett telefonnummer."
	},
	url: {
		name: "URL",
		type: "url",
		required: false,
		error: "Du måste fylla i en URL som börjar med http:// eller https://."
	},
	accept: {
		name: "Accepterar villkoren",
		type: "checkbox",
		required: true,
		error: "Du måste acceptera villkoren."
	}
};
