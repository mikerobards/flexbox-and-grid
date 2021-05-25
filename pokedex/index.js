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

async function getAllPokemon() {
    let res = await fetch('pokemon.json')
    let data = await res.json()
    return data
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
    </div>
`
}

getAllPokemon().then(allPokemon => {
    let samplePokemon = allPokemon[350]
    document.body.innerHTML = `<div class="my-pokedex">${allPokemon.map(aPokemon => getPokemonHTML(aPokemon)).join('')}
    </div>`
})