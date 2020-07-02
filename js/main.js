let createPlanetCard = (planet) => {

  let planetItem = document.createElement('div');
  planetItem.className = 'planet_item';

  let planetImage = document.createElement('img', planet.img);
  // let planetDesc = document.createElement('p', planet.desc);
  let planetName = document.createElement('h4', planet.name);

  planetImage.className = 'planet_img';
  // planetDesc.className = 'planet_desc';
  planetName.className = 'planet_name';

  planetImage.setAttribute('src', `./img/${planet.img}`);

  planetName.innerHTML = planet.name;
  // planetDesc.innerHTML = planet.desc;

  planetItem.appendChild(planetImage);
  planetItem.appendChild(planetName);
  // planetItem.appendChild(planetDesc);


  return planetItem;
}

console.log(planet.length)

planet.map(planet => {
  let planetCard = createPlanetCard(planet);
  let planetsContainer = document.getElementById('planets');

  planetCard.addEventListener('click', () => {
    let planet_desc = document.getElementById('planet_information');
    planet_desc.innerHTML = planet.desc;
  })

  planetsContainer.appendChild(planetCard);

})

