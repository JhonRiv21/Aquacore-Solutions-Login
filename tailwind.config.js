/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: [
	'./public/**/*.html',
	],
	darkMode: false,  // or 'media' or 'class'
	theme: {
	  extend: {
		fontFamily: {
			'roboto': ['Roboto', 'sans-serif']
		},	
		colors: {
			'blue-fond': ['#040114', '#001769'], 
		  },
	  }
	},
	variants: {
	  extend: {},
	},
	plugins: [],
    }