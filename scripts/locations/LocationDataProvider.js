/*
The goal of this file is to list all data.
We must then export a function that fetches said data.
*/

// List of Data
const locationCollection = [
    "South Beach",
    "That Puddle",
    "River Styx",
    "Uncle Robertson's Fishery"
];

// Exports function that fetches data.
export const getLocation = () => {
    return locationCollection;
}