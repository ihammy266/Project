
import { planets } from "./api";

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
            <div class = "first-card-design">
            <img src= "${planet.image}">
          <p>${planet.name}</p>
          <p>Type:${planet.type}</p>
          </div>
          <div class="second-card-dresign">
          <p>Gravity:${planet.gravity}</p>
          <p>Mass:${planet.mass}</p>
          <p>Period:${planet.period}</p>
          </div>
          <div class="third-card-design">
          <div>
          <img src = "TemperatureIcon.svg">
          <p>${planet.temperature}</p>
          </div>
          <div>
          <img src="Halfmoon.svg">
          <p>${planet.moons}</p>
          </div>
          <div>
          <img src = "Diameter.svg">
          <p>${planet.diameter}</p>
          </div>
          <div>
          <Img src = "Diameter.svg">
          <p>${planet.distanceFromSun}</p>
          </div>
         </div>
          
          
          <p>
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