import { Injectable } from '@angular/core';

 export interface PokemonRules{
  id:number;
  name:string;
  image:string;
  type:string;
  bio:string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons:any[] = [
    {
      "id":0,
      "name":"Bulbasaur",
      "image":"001.png",
      "type":"Grass / Poison",
      "bio":"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
    },
    {
      "id":1,
      "name":"Ivysaur ",
      "image":"002.png",
      "type":"Grass / Poison",
      "bio":"When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
    },
    {
      "id":2,
      "name":"Venusaur ",
      "image":"003.png",
      "type":"Grass / Poison",
      "bio":"Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
    },
    {
      "id":3,
      "name":"Charmander ",
      "image":"004.png",
      "type":"Fire",
      "bio":"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
    },
    {
      "id":4,
      "name":"Charmeleon ",
      "image":"005.png",
      "type":"Fire",
      "bio":"It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."
    },
    {
      "id":5,
      "name":"Charizard ",
      "image":"006.png",
      "type":"Fire",
      "bio":"It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
    },
    {
      "id":6,
      "name":"Squirtle ",
      "image":"007.png",
      "type":"Water",
      "bio":"When it retracts its long neck into its shell, it squirts out water with vigorous force."
    },
    {
      "id":7,
      "name":"Wartortle ",
      "image":"008.png",
      "type":"Water",
      "bio":"It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old."
    },
    {
      "id":8,
      "name":"Blastoise ",
      "image":"009.png",
      "type":"Water",
      "bio":"It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell."
    },
    {
      "id":9,
      "name":"Caterpie ",
      "image":"010.png",
      "type":"Bug",
      "bio":"For protection, it releases a horrible stench from the antenna on its head to drive away enemies."
    },
    {
      "id":10,
      "name":"Metapod ",
      "image":"011.png",
      "type":"Bug",
      "bio":"It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack."
    },
    {
      "id":11,
      "name":"Butterfree",
      "image":"012.png",
      "type":"Bug / Flying",
      "bio":"In battle, it flaps its wings at great speed to release highly toxic dust into the air."
    },
    {
      "id":12,
      "name":"Weedle ",
      "image":"013.png",
      "type":"Bug / Poison",
      "bio":"Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves."
    },
    {
      "id":13,
      "name":"Kakuna",
      "image":"014.png",
      "type":"Bug / Poison",
      "bio":"Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy."
    },
    {
      "id":14,
      "name":"Beedrill ",
      "image":"015.png",
      "type":"Bug / Poison",
      "bio":"It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly."
    },
    {
      "id":15,
      "name":"Pidgey ",
      "image":"016.png",
      "type":"Normal / Flying",
      "bio":"Very docile. If attacked, it will often kick up sand to protect itself rather than fight back."
    },
    {
      "id":16,
      "name":"Pidgeotto ",
      "image":"017.png",
      "type":"Normal / Flying",
      "bio":"This Pokémon is full of vitality. It constantly flies around its large territory in search of prey."
    },
    {
      "id":17,
      "name":"Pidgeot ",
      "image":"018.png",
      "type":"Normal / Flying",
      "bio":"This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons."
    },
    {
      "id":18,
      "name":"Rattata ",
      "image":"019.png",
      "type":"Normal",
      "bio":"Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area."
    },
    {
      "id":19,
      "name":"Raticate ",
      "image":"020.png",
      "type":"Normal",
      "bio":"Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey."
    },
  ];

  getPokemons(){
    return this.pokemons;
  }

  getPokemon(id:number){
    let pokeArr = [];

    for(let pokemon of this.pokemons){
      if(pokemon.id == id){
        pokeArr.push(pokemon);
      }
    }
    return pokeArr;
  }

  searchPokemon(word:string){
    let pokeArr = [];

    word = word.toLowerCase();
    for(let pokemon of this.pokemons){
      let name = pokemon.name.toLowerCase();
      if(name.indexOf(word) >= 0){
        pokeArr.push(pokemon);
      }
    }
    return pokeArr;
  }

  constructor() { }
}
