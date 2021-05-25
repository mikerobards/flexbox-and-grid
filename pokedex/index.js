/*
    Pokedex
    
    Write an async function 
        that uses fetch() to fetch all 
        Pokemon from pokemon.json
    
    Display all the Pokemon
        ID, English Name, 
        Type(s), 
        Stats: HP/Attack/Defense/Speed
*/

/*
    Pokedex (Challenge)
    
    Write and utilize a 
        displayPokedex(allPokemon) function 
    
    Display the Japanese, Chinese, and French
        name of each Pokemon under its Stats
        each should take up 1/3rd of the row 
*/


async function getAllPokemon() {
    let res = await fetch('pokemon.json')
    let data = await res.json()
    return data.slice(0,100)
}

function getPokemonHTML(aPokemon) {
    return `
    <div class="a-pokemon">
        <div class="a-pokemon-id">${aPokemon.id}</div>
        <div class="a-pokemon-name">${aPokemon.name.english}</div>
        <div class="a-pokemon-type">${aPokemon.type.join(' / ')}</div>
        <div class="a-pokemon-stat">${aPokemon.base.HP}</div>
        <div class="a-pokemon-stat">${aPokemon.base.Attack}</div>
        <div class="a-pokemon-stat">${aPokemon.base.Defense}</div>
        <div class="a-pokemon-stat">${aPokemon.base.Speed}</div>
        <div class="a-pokemon-lang">${aPokemon.name.japanese}</div>
        <div class="a-pokemon-lang">${aPokemon.name.chinese}</div>
        <div class="a-pokemon-lang">${aPokemon.name.french}</div>

    </div>
`
}

getAllPokemon().then(displayPokedex)

function displayPokedex(allPokemon) {
        document.body.innerHTML = `<div class="my-pokedex">
        ${allPokemon.map(aPokemon => getPokemonHTML(aPokemon)).join('')}
        </div>`
    }
