import { getFish } from "./FishData.js";
import { Fish } from "./Fish.js";

//Function that appends built Fish into the inner HTML of the target.
export const FishList = () => {

    //Locates positon of HTML to insert list into and assigns to variable.
    const contentElement  = document.querySelector(".fishList");
    
    //Pulls the entire array from FishList with getFish.
    const fishes = getFish();

    //Empty variable to hold fishHTML as it loops.
    let fishHTMLRepresentation  = "";

    //Loop over the array.
    for (const oneThingFromTheSea of fishes){
        fishHTMLRepresentation  += Fish(oneThingFromTheSea);
    }
    //Injects completed HTML from loop where it belongs
    contentElement .innerHTML += `
        ${fishHTMLRepresentation }
    `
}