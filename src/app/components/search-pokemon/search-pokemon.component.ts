import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html'
})
export class SearchPokemonComponent implements OnInit {

  pokemon:any[] = [];
  constructor(private params:ActivatedRoute, private pokemons:PokemonsService) {
    this.params.params.subscribe(params =>{
      this.pokemon = this.pokemons.searchPokemon(params['name']);
    })
  }

  ngOnInit(): void {
  }

}
