import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PokemonsService} from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html'
})
export class PokemonInfoComponent implements OnInit {

  pokemon:any[] = [];

  constructor(private ParamsRoute: ActivatedRoute, private pokemonService:PokemonsService) { 
    this.ParamsRoute.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemon(params['id']);
    })
  }

  

  ngOnInit(): void {
  }

}
