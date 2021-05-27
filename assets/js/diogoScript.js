const mainContainer = document.querySelector('.mainContainer')
const searchButton = document.querySelector('.sBtn')
const pokinput = document.querySelector('input')



// actual behavior
const SearchPoke = (pokemon) => {
  mainContainer.innerHTML = ""
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then((data) => {
      const img = `<div class="pokemon">
      <img src="${data.sprites.front_default}" alt="">
      <h3>${data.name}</h3>
      <h4>${data.types[0].type.name}</h4>
    </div>`
      // console.log(data.sprites.front_default)
      mainContainer.insertAdjacentHTML('beforeend', img)
    })
    .catch(function(response) {
      // FAILURE RESPONSE
      console.log('Error! Please try again');
      pokinput.value = ""
      b = document.querySelector('body')
      b.style.transition = "all ease 5s"
      b.style.transform = "rotate(360deg)"
      alert('YOU ENTERED A WRONG POKENAME')
  });
}
// something
// something else

// When i click on searchButton, i want the pokemon i wrote there to appear inside the mainContainer


// Entry Point
searchButton.addEventListener('click', (event) => {
  console.log(pokinput.value)
  SearchPoke(pokinput.value)
})