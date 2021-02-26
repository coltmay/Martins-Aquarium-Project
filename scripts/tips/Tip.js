export const Tip = (tipString) => {
    for (const singleTip in tipString) {
        return (`<p>${tipString}</p>`)
    }
}