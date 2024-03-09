import { Component, OnInit } from '@angular/core';
import { ApiGatewayServiceService } from './services/api-gateway-service.service';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebaTecnica55';
  inputSearchPokemon = new FormControl('', Validators.required);
  pokemonFound : any;
  operationFlag : boolean = false;

  constructor(private dataService: ApiGatewayServiceService) {}

  ngOnInit() {
    this.inputSearchPokemon.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(newValue => {
      this.searchPokemon(newValue);
    });
  }

  public searchPokemon(value: any) {
    this.dataService.GetPokemon(value.toLowerCase().trim(), (res: any) => {
      if (res.status == 404) {
         this.operationFlag = false
        }
      else {
        this.operationFlag = true
        this.pokemonFound = res.body
      }
    });
  }
}
