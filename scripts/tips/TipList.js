import { getTips } from "./TipDataProvider.js";
import { Tip } from "./Tip.js";

/*
- [ ] Locate where I want to inject the tips.
- [ ] Assign that location to a variable.
- [ ] Gets the tips from getTips located in TipDataProvider.
- [ ] Assign an empty variable to hold the HTML.
- [ ] Loops through the array, concatinating the above mentioned empty variable.
- [ ] Inject complete HTML into specified location.
*/
export const TipList = () => {
    //Locates positon of HTML to insert list into and assigns to variable.
    const contentElementTipList  = document.querySelector(".tipList");
    //Pulls the entire array from FishList with getFish.
    const tips = getTips();
    //Empty variable to hold fishHTML as it loops.
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