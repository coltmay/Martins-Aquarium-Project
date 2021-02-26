import { getLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"
/*
- [X] Import Necessary Functions.
- [] Locate where I want to inject the tips.
- [] Assign that location to a variable.
- [] Gets the tips from getTips located in TipDataProvider.
- [] Assign an empty variable to hold the HTML.
- [] Loops through the array, concatinating the above mentioned empty variable.
- [] Inject complete HTML into specified location.
*/
export const LocationList = () => {
    const contentElementLocationList = document.querySelector(".locationList");
    const locations = getLocation();
    let locationHTMLRepresentation = "";
    for (const aLocation of locations) {
        locationHTMLRepresentation += Location(aLocation);
    }
    contentElementLocationList.innerHTML += `
        ${locationHTMLRepresentation}
    `
}
