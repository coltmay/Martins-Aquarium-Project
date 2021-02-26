/*
The goal of this file is to write an exportable function that can loop through an array of strings and return each individual value in HTML format.
*/
export const Location = (locationString) => {
    for (const singleLocation in locationString) {
        return (`<p>${locationString}</p>`)
    }
}