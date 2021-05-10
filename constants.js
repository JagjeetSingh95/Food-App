import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const searchIcon = require('./assets/images/search.png');
export const bellIcon = require('./assets/images/bell.png');
export const menuIcon = require('./assets/images/menu.png');
export const bellPepper = require('./assets/images/bell-pepper.png');
export const broccoli = require('./assets/images/broccoli.png');
export const cabbage = require('./assets/images/cabbage.png');
export const carrot = require('./assets/images/carrot.png');
export const chili = require('./assets/images/chili.png');
export const eggplant = require('./assets/images/eggplant.png');
export const harvest = require('./assets/images/harvest.png');
export const potato = require('./assets/images/potato.png');
export const spinach = require('./assets/images/spinach.png');
export const tomato = require('./assets/images/tomato.png');
export const shopping = require('./assets/images/shopping.png');
export const chicken = require('./assets/images/chicken.png');
export const fruits = require('./assets/images/fruits.png');
export const fish = require('./assets/images/fish.png');
export const sheep = require('./assets/images/sheep.png');
export const shrimp = require('./assets/images/shrimp.png');
export const delivery = require('./assets/images/delivery.png');
export const offers = require('./assets/images/offers.png');

export const COLORS = {
	// base colors
	primary: "#f55858", 
	secondary: "#fdeecc",   

	// colors
	black: "#000",
	white: "#FFFFFF",
	lightGray: "#f8f8f8",
};

export const SIZES = {
	// global sizes
	base: 8,
	font: 14,
	radius: 15,
	padding: 24,
	padding2: 40,
	padding15: 15,
	padding20: 20,

	// font sizes
	largeTitle: 50,
	h1: 30,
	h2: 25,
	h3: 16,
	h4: 14,
	body1: 30,
	body2: 20,
	body3: 16,
	body4: 14,

	// app dimensions
	width,
	height
};

export const FONTS = {
	largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
	h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
	h2: { fontFamily: "Roboto-Regular", fontSize: SIZES.h2, lineHeight: 30 },
	h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
	h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
	body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
	body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
	body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
	body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default { 
	searchIcon,
	bellIcon,
	menuIcon,
	appTheme,
	bellPepper,
	broccoli,
	cabbage,
	carrot,
	chili,
	eggplant,
	harvest,
	potato,
	spinach,
	tomato,
	shopping,
	chicken,
	fruits,
	fish,
	sheep,
	shrimp,
	delivery,
	offers
}