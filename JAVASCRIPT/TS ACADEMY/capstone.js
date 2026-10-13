
import { planets } from "./api.js";

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
    const result = document.querySelector('.js-no-results');
    const container = document.querySelector('.planet-info');
    let matchingPlanet;
    planets.forEach((planet) => {


        let index = 0;
        if (searchValue === planet.name) {
            matchingPlanet = planet;
        }



        if (matchingPlanet) {
            container.innerHTML = `
                  <div class="first-card-design">
        <div class="image-container">
          <img class="planet-image"src="${matchingPlanet.image}">
        </div>
        <div class="card-description">
          <h3 class="planet-name">${matchingPlanet.name}</h3>
          <p class="type">${matchingPlanet.type}</p>
          <p class="name-description">"${matchingPlanet.description}"</p>
        </div>
      </div>


      <div class="second-card-design">
        <div>
          <p class="name">Gravity</p>
          <p class="gravity">${matchingPlanet.gravity}</p>
        </div>
        <div>
          <p class="name">Mass</p>
          <p class="mass">${matchingPlanet.mass}</p>
        </div>
        <div>
          <p class="name">Period</p>
          <p class="period">${matchingPlanet.period}</p>
        </div>
      </div>
      <div class="third-card-design">
        <div>
          <img src="TemperatureIcon.svg">
          <p>${matchingPlanet.temperature}</p>
        </div>
        <div>
          <img src="Halfmoon.svg">
          <p>${matchingPlanet.moons}</p>
        </div>
        <div>
          <img src="Diameter.svg">
          <p>${matchingPlanet.diameter}</p>
        </div>
        <div>
          <Img src="CompanyIcon.svg">
          <p>${matchingPlanet.distanceFromSun}</p>
        </div>
      </div>
    </div>
`; result.style.opacity = "0";
        } else {
            container.innerHTML = `
      <p>No result Found!</p
      <p>we could'nt find any planet matching your search.Please double-check the name and try again</p>
      `;
            result.style.opacity = "1";
        }
    });

    input.value = "";
}

document.querySelector('#search-button')
    .addEventListener('click', () => {
        showOutput();
    });