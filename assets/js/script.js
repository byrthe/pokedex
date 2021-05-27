let img = document.querySelector('.sprite');
let pokename = document.querySelectorAll('.pokename');
let idnr = document.querySelector('.idnr');
let ul = document.querySelector('ul');

  const contentDump = document.querySelector('#pokedex');
  const searchBtn = document.querySelector('.btn-search');
  const pokinput = document.querySelector('input');

  // actual behavior
const SearchPoke = (pokemon) => {
  contentDump.innerHTML = "";
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then((data) => {
      const pokeCard = `<div id="left-pokedex">
                          <div class="lights">
                          <div class="bluebig"></div>
                          <div class="smalllights">
                            <div class="red"></div>
                            <div class="yellow"></div>
                            <div class="green"></div>
                          </div>
                        </div>
                          <div class="viewer">
                              <div class="screen">
                                  <center><img class="sprite" src="${data.sprites.front_default}" alt=""></center>
                              </div>
                          </div>
                      </div>

                      <div id="right-pokedex">
                          <div class="idbox">
                            <p class="pokename">${data.name} &nbsp;</p>
                            <p class="idnr">#${data.id} </p>
                          </div>
                          <div class="moves">
                              <ul id="movelist">
                                  <span class="pokename">${data.name}</span>'s moves:
                                  <li>* ${data.moves[0].move.name}</li>
                                  <li>* ${data.moves[1].move.name}</li>
                                  <li>* ${data.moves[2].move.name}</li>
                                  <li>* ${data.moves[3].move.name}</li>
                              </ul>
                          </div>
                      </div>`
                      console.log(data.sprites.front_default);
      contentDump.insertAdjacentHTML('beforeend', pokeCard)
    })
    .catch(function(response) {
      // FAILURE RESPONSE
      console.log('Error! Please try again');
      pokinput.value = "";
      b = document.querySelector('body');
      b.style.transition = "all ease 2s";
      b.style.transform = "rotate(360deg)";
      alert('YOU ENTERED A WRONG POKENAME');
  });
};

// Entry Point
searchBtn.addEventListener('click', (event) => {
  console.log(pokinput.value)
  SearchPoke(pokinput.value)
});



// fetch('https://pokeapi.co/api/v2/pokemon/charmander')
//   .then(response => response.json())
//   .then((data) => {
//     //testing
//     console.log(data);
//     console.log(data.sprites);
//     console.log(data.id);
//     console.log(data.moves[3]);
//     console.log(data.moves[3].move.name);
//     console.log(data.name);
//     // idnr.style.fontSize = "25px";

//     // image
//     let profilepic = data.sprites.front_default;
//     img.setAttribute('src', profilepic);

//     //name
//     const pokemon = data.name;
//     // pokename with a capital
//     const pokeCapt = pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
//     // add the name in each element with class .pokename
//     pokename.forEach(p => p.innerHTML = pokeCapt);

//     // array.forEach(pokename => {
      
//     // }); pokename.innerText = data.name;
//     // id #
//     idnr.insertAdjacentHTML('beforeend', data.id);

//     // moves
//     for(i=0; i<=3; i++){
//       // access fightmoves from API
//       let fightMove = data.moves[i].move.name;
//       // access movelist ul in the html
//       let ul = document.getElementById("movelist");
//       // var for creating a li element
//       let li = document.createElement('li');
//       // inside the li element, create a text node with the content from the API
//       li.appendChild(document.createTextNode(fightMove));
//       // insert the li's in the ul
//       ul.appendChild(li);
      
//     };
    
//   });