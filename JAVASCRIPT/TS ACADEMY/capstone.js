
const planets = [{
    name: "Earth",
    mass: 0.330
}, {
    name: "Mars",
    mass: 0.330
}, {
    name: "Venus",
    mass: 0.330
}
]

/*let planetSummaryHTML = "";
planets.forEach((planet) => {
    planetSummaryHTML += `
    <div class = "planet-info">
    <p>Earth</p>
    <p>Mass:${planet.mass}</p>
    </div>
 `;
});


const container = document.querySelector('.container').innerHTML = planetSummaryHTML;
*/
function showOutput() {
    const input = document.querySelector('#input');
    const searchValue = input.value;

    planets.forEach((planet) => {
        const container = document.querySelector('.planet-info');
        let matchingPlanet;
        let index = 0;
        if (searchValue === planet.name) {
            matchingPlanet = planet;
        }
        if (matchingPlanet) {
            container.innerHTML = `
          <p>${planet.name}</p>
          <p>Mass:${planet.mass}</p>
         `;
        } else {
            console.log("Not found");
        }
    });
    input.value = "";
}

document.querySelector('#search-button')
    .addEventListener('click', () => {
        showOutput();
    })