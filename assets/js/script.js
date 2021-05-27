let img = document.querySelector('.sprite');
let pokename = document.querySelectorAll('.pokename');
let idnr = document.querySelector('.idnr');
let ul = document.querySelector('ul');



fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(response => response.json())
  .then((data) => {
    //testing
    console.log(data);
    console.log(data.sprites);
    console.log(data.id);
    console.log(data.moves[3]);
    console.log(data.moves[3].move.name);
    console.log(data.name);
    // idnr.style.fontSize = "25px";

    // image
    let profilepic = data.sprites.front_default;
    img.setAttribute('src', profilepic);

    //name
    const pokemon = data.name;
    // pokename with a capital
    const pokeCapt = pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
    // add the name in each element with class .pokename
    pokename.forEach(p => p.innerHTML = pokeCapt);

    // array.forEach(pokename => {
      
    // }); pokename.innerText = data.name;
    // id #
    idnr.insertAdjacentHTML('beforeend', data.id);

    // moves
    for(i=0; i<=3; i++){
      // access fightmoves from API
      let fightMove = data.moves[i].move.name;
      // access movelist ul in the html
      let ul = document.getElementById("movelist");
      // var for creating a li element
      let li = document.createElement('li');
      // inside the li element, create a text node with the content from the API
      li.appendChild(document.createTextNode(fightMove));
      // insert the li's in the ul
      ul.appendChild(li);
      
    };
    
  });


