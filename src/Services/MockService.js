export const FieldService =  {
	getField: function(id) {
		return {
		  "label": "Sales region",
		  "required": false,
		  "choices": [
			"Asia",
			"Australia",
			"Western Europe",
			"North America",
			"Eastern Europe",
			"Latin America",
			"Middle East and Africa"
		  ],
		  "displayAlpha": true,
		  "default": "North America"
		}
	},
	saveField: async function (fieldJson) {
		// Add the code here to call the API (or temporarily, just log fieldJson to the console)
        const response = await fetch('http://www.mocky.io/v2/566061f21200008e3aabd919', {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(fieldJson) 
          });

          const data = await response.json(); 
		  console.log(data);
          return data;
        }
}