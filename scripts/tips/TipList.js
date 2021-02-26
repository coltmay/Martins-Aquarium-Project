import { getTips } from "./TipDataProvider.js";
import { Tip } from "./Tip.js";
/*
- [X] Locate where I want to inject the tips.
- [X] Assign that location to a variable.
- [X] Gets the tips from getTips located in TipDataProvider.
- [X] Assign an empty variable to hold the HTML.
- [X] Loops through the array, concatinating the above mentioned empty variable.
- [X] Inject complete HTML into specified location.
*/
export const TipList = () => {
    //Locates positon of HTML to insert list into and assigns to variable.
    const contentElementTipList  = document.querySelector(".tipList");
    //Pulls the entire array from TipList with getTips.
    const tips = getTips();
    //Empty variable to hold tipHTML as it loops.
    let tipHTMLRepresentation  = "";
    //Loop over the array.
    for (const aTip of tips){
        tipHTMLRepresentation  += Tip(aTip);
    }
    //Injects completed HTML from loop where it belongs
    contentElementTipList.innerHTML += `
        ${tipHTMLRepresentation}
    `
}