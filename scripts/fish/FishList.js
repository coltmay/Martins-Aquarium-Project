import { getFish, getMostHolyFish, getSoldierFish, getUnworthy } from "./FishData.js";
import { Fish } from "./Fish.js";

// Function that appends gets the fish from getFish, assigns it to a variable, then loops through the array, finally injective the build HTML into the needed location.
export const FishList = () => {
    // Pulls the entire array from all three types of fish, then calls the function.
    const holyFish = getMostHolyFish();
    addFishToDom(holyFish, "Holy Fish");

    const soldierFish = getSoldierFish();
    addFishToDom(soldierFish, "Solider Fish");

    const unworthyFish = getUnworthy();
    addFishToDom(unworthyFish, "Unworthy Fish");
}

// Created separate function for injecting HTML
const addFishToDom = (whichFishArray, phrase) => {
    // Locates positon of HTML to insert list into and assigns to variable.
    const contentElement = document.querySelector(".fishTank");

    // Empty variable to hold fishHTML as it loops.
    let fishHTMLRepresentation = ``;

    // Loop over the array.
    for (const oneThingFromTheSea of whichFishArray) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }

    // Injects completed HTML from loop where it belongs.
    // contentElement.innerHTML += `
    //     ${fishHTMLRepresentation}
    // `
    contentElement.innerHTML += `<h2 class="fishHeadLine">${phrase}</h2>
                                <div class="fishSection>${fishHTMLRepresentation}</div>`;
}