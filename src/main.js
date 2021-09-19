/* Todo tu código que tenga que ver con mostrar los datos en la pantalla. interacción con el DOM. Operaciones como creación de nodos, registro de
 manejadores de eventos. */

let dataPokemon = window.POKEMON.pokemon
let filtroPorTipo =  document.getElementById('filtro-tipo')
let filtroPorHuevo = document.getElementById('filtro-huevo')
let containerPokemon = document.getElementById('container-pokemon')

const template = (data) => { 
    let sTemplate = ''

    for (let i = 0; i < data.length; i++) {         
        sTemplate += `
                    <article class="pokemon">
                    <img src="${data[i].img}" border="1">                    
                    <p class="info-Pokemon">${data[i].name}<br>${data[i].num}<br>${data[i].egg}</p>                
                    </article>`      
    }      
    return sTemplate
  }
containerPokemon.innerHTML += template(dataPokemon)

filtroPorTipo.addEventListener('change', () => {   
    let valueOption = filtroPorTipo.value
    let filtroType = window.filterData(dataPokemon, 'Tipo', valueOption)
    template(filtroType)
    containerPokemon.innerHTML = ''
    containerPokemon.innerHTML += template(filtroType)    
})

filtroPorHuevo.addEventListener('change', () => {   
  let valueOption = filtroPorHuevo.value
  let filtroType = window.filterData(dataPokemon, 'Huevo', valueOption)
  template(filtroType)
  containerPokemon.innerHTML = ''
  containerPokemon.innerHTML += template(filtroType)    
})
