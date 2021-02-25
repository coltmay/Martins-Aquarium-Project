// Function that returns fish objects passed through as rendered HTML elements
export const fishHTMLPopulate = (allFish) => {
    return `<article class="fish-card">
				<div><img class="fish-image" src="images/${allFish.image}" /></div>
				<h3 class="fish-name">${allFish.name}</h3>
				<ul>
					<li class="fish-details">${allFish.species}</li>
					<li class="fish-details">Length: ${allFish.length} inches</li>
					<li class="fish-details">Found: ${allFish.location}</li>
					<li class="fish-details">Diet: ${allFish.diet}</li>
				</ul>
        	</article>`
}