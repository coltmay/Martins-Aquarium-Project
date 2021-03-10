// A list of ALL fish data the class wrote up.  This data was created and retrieved, this is what we want to display
const fishCollection = [
	{
		saltWater: true,
		harvestLocation: "Pacific Ocean",
		diet: "algae",
		name: "Malcolm",
		species: "Blue Tang",
		inches: 13,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Bali",
		diet: "really small fish",
		name: "Bob",
		species: "Guppy",
		inches: 3,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Pacific Ocean",
		diet: "shellfish",
		name: "Jerry",
		species: "swordfish",
		inches: 80,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Gulf of Mexico",
		diet: "tiny fish",
		name: "Predator",
		species: "catfish",
		inches: 20,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Ocean",
		diet: "Herring",
		name: "Sabre",
		species: "Swordfish",
		inches: 117.6,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Amazon Basin",
		diet: "brine shrimp",
		name: "Myrti",
		image: "bluefish.jpg",
		inches: 12,
		species: "angel fish"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Ocean",
		diet: "Plankton",
		name: "Nemo",
		species: "Clownfish",
		inches: 4,
		image: "bluefish.jpg"
	},
	{
		saltwater: false,
		harvestLocation: "Mississippi River",
		diet: "Everything",
		name: "Vacuum",
		species: "Catfish",
		inches: 24,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Bobbies Fish Emporium",
		diet: "minnows",
		name: "Ralph",
		species: "Smallmouth Bass",
		inches: 14,
		image: "bluefish.jpg"
	},
	{
		saltWater: "false",
		harvestLocation: "Cumberland River",
		diet: "anything",
		name: "Whiskers",
		species: "Ictalurus furcatus",
		inches: 39,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Lake Tahoe",
		diet: "insects",
		name: "Trent",
		species: "Rainbow Trout",
		inches: 21,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Carribean Sea",
		diet: "shrimp",
		name: "Stephen",
		species: "Angler",
		inches: 23,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Barbados",
		diet: "anchoves",
		name: "Pizza",
		species: "Tuna",
		inches: 40,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "TN River",
		diet: "Bacon",
		name: "Finn",
		species: "Bass",
		inches: 20,
		image: "bluefish.jpg",
	},
	{
		saltWater: true,
		diet: "mollusks",
		name: "Simba",
		species: "lionfish",
		harvestLocation: "Red Sea",
		Inches: 10,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "New Zealand",
		diet: "Lost Sailors",
		name: "Tiki",
		species: "Parrot Fish",
		inches: 36,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Red Sea",
		diet: "algae",
		name: "Bobo",
		species: "Clown Fish",
		inches: 5,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Sea",
		name: "Flipper",
		inches: 12,
		image: "bluefish.jpg",
		diet: "worms",
		species: "garibaldi"
	},
	{
		saltWater: true,
		harvestLocation: "Bikini Bottom",
		diet: "Big Ole Fish",
		name: "Pearl",
		species: "Whale",
		inches: 1000,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Port Innsmouth",
		diet: "Primeval Shadows",
		name: "Cthulhu",
		species: "Old One",
		inches: 999,
		image: "bluefish.jpg"
	},
	{ saltWater: false, harvestLocation: "Amazon River", diet: "smaller fish", name: "Bitey", species: "Pirhana", inches: 7.5, image: "bluefish.jpg" },
	{
		saltwater: true,
		harvestLocation: "St.Croix",
		diet: "squid",
		name: "Crush",
		species: "blue ting",
		inches: 7,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Minnesota",
		diet: "Cherry Tomatoes",
		name: "Frank",
		species: "Piranha",
		inches: 7,
		image: "bluefish.jpg"
	},
	{
		saltwater: true,
		harvestLocation: "Baltic Sea",
		diet: "smaller fish",
		name: "Fil",
		species: "goldFish",
		inches: 40,
		image: "bluefish.jpg"
	}
];

// A function to return fishCollection we want to export a function rather than the array of objects we have created
export const getFish = () => {
	return fishCollection;
}

export const getMostHolyFish = () => {
	// 3, 6, 9, 12, etc... fish
	const holyFishArray = [];
	for (const eachFish of fishCollection) {
		if (eachFish.inches % 3 === 0) {
			holyFishArray.push(eachFish);
		}
	}
	return holyFishArray;
}

export const getSoldierFish = () => {
	// 5, 10, !15, 20, 25, etc... fish
	const soldiersArray = [];
	for (const eachFish of fishCollection) {
		if (eachFish.inches % 5 === 0 && eachFish.inches % 3 !== 0) {
			soldiersArray.push(eachFish);
		}
	}
	return soldiersArray;
}

export const getUnworthy = () => {
	// Any fish not a multiple of 3 or 5
	const unworthyArray = [];
	for (const eachFish of fishCollection) {
		if (!(eachFish.inches % 5 === 0 || eachFish.inches % 3 === 0)) {
			unworthyArray.push(eachFish);
		}
	}
	return unworthyArray;
}