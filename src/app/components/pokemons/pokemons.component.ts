import { Component, OnInit } from '@angular/core';

//services
import { PokemonsService, PokemonRules } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  pokemons:PokemonRules[] = [];
  constructor(private _pokemons:PokemonsService) { }

  ngOnInit(): void {
    this.pokemons = this._pokemons.getPokemons();
  }

}
