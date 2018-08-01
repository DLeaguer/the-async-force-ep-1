console.log('awesome');


/////////////////////
//   person4Name   //
/////////////////////


let o1Req = new XMLHttpRequest()

o1Req.addEventListener('load', function(res) {
  console.log('person4Name res', res);
  console.log('person4Name response', JSON.parse(res.currentTarget.response));
  console.log('person4Name name response', JSON.parse(res.currentTarget.response).name);
  
  document.getElementById('person4Name').innerHTML = JSON.parse(res.currentTarget.response).name;

  /////////////////////////////////////
  // second request person4HomeWorld //
  /////////////////////////////////////

  let oReq1 = new XMLHttpRequest()

  oReq1.addEventListener('load', function(res) {
    console.log('person4HomeWorld res', res);
    console.log('person4HomeWorld response', JSON.parse(res.currentTarget.response));
    console.log('person4HomeWorld name response', JSON.parse(res.currentTarget.response).name);
      
    document.getElementById('person4HomeWorld').innerHTML = JSON.parse(res.currentTarget.response).name;
  })
  
  oReq1.open('GET', 'https://swapi.co/api/planets/1/');
  oReq1.send();
});

o1Req.open('GET', 'https://swapi.co/api/people/4');
o1Req.send();


//////////////////////
//   person14Name   //
//////////////////////


let o2Req = new XMLHttpRequest()

o2Req.addEventListener('load', function(res) {
  console.log('person14Name res', res);
  console.log('person14Name response', JSON.parse(res.currentTarget.response));
  console.log('person14Name name response', JSON.parse(res.currentTarget.response).name);

  document.getElementById('person14Name').innerHTML = JSON.parse(res.currentTarget.response).name;

  ////////////////////////////////////
  // second request person14Species //
  ////////////////////////////////////

  let oReq2 = new XMLHttpRequest()

  oReq2.addEventListener('load', function(res) {
    console.log('person14Species res', res);
    console.log('person14Species response', JSON.parse(res.currentTarget.response));
    console.log('person14Species name response', JSON.parse(res.currentTarget.response).name)

    document.getElementById('person14Species').innerHTML = JSON.parse(res.currentTarget.response).name;

  });
  oReq2.open('GET', 'https://swapi.co/api/species/1/');
  oReq2.send();
});

o2Req.open('GET', 'https://swapi.co/api/people/14');
o2Req.send();


///////////////////
//     FILMS     //
///////////////////


let o3Req = new XMLHttpRequest()

o3Req.addEventListener('load', function(res) {
  let data = JSON.parse(res.currentTarget.response);
  console.log('film res', res);
  console.log('film response', data);
  console.log('film response results', data.results);
  console.log('film title response', data.results[0].planets[0]);
  
  ///////////////
  // film list //
  ///////////////
  
  let film = document.createElement('li');
  film.innerHTML = "<span><h2>Film List with planets:</h2><span>";
  film.type = 'none';
  film.className = 'film';
  filmList.appendChild(film);

  
  for (let i = 0; i < data.results.length; i++) {

    let filmTitle = document.createElement('h2');
    filmTitle.className = 'filmTitle';
    filmTitle.innerHTML = data.results[i].title;
    film.appendChild(filmTitle);
  
    // document.getElementsByClassName('filmTitle')[i].innerHTML = data.results[i].title;

    console.log('results[i].planets.length =', data.results[i].planets.length);

    /////////////////
    // planet list //
    /////////////////

    let planets = document.createElement('h4')
    planets.innerHTML = 'Planets';
    filmTitle.appendChild(planets);
  
    let filmPlanets = document.createElement('ul');
    filmPlanets.className = 'filmPlanets';
    filmTitle.appendChild(filmPlanets);
    
    
    for (let j = 0; j < data.results[i].planets.length; j++) {
      
      let filmName = data.results[i].title;
      let planetLink = data.results[i].planets[j];
      console.log('film:', filmName, 'planet:', planetLink);
      
      // let planet = document.createElement('li');
      // planet.className = 'planet';
      // planet.innerHTML = data.results[i].planets[j];
      // filmPlanets.appendChild(planet);

      // console.log('films planet name response', data.results[i].planets[j]);
      // document.getElementsByClassName('planet')[j].innerHTML = data.results[i].planets[j];
      
      ////////////////////////////
      // second request planets //
      ////////////////////////////

      let planet = document.createElement('li');
      planet.className = 'planet';
      filmPlanets.appendChild(planet);
      
      let oReq3 = new XMLHttpRequest()
      
      
      oReq3.addEventListener('load', function(res) {
        data = JSON.parse(res.currentTarget.response);
        console.log('films planet response', data);
        // console.log('response planet:', data.name, ', planet:', planetLink);

        let planetName = document.createElement('h4');
        planetName.className = 'planetName';
        planetName.innerHTML = data.name;
        planet.appendChild(planetName);
      });


      oReq3.open('GET', data.results[i].planets[j]);
      oReq3.send();
    };
  }
});

o3Req.open('GET', 'https://swapi.co/api/films/');
o3Req.send();
