import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayServiceService {

  constructor(private http: HttpClient) { }
  private urlService : string = 'http://pokeapi.co/api/v2/pokemon/';

  public GetPokemon(pokemon:any, callback:any) {
    this.http.get(`${this.urlService}${pokemon}`, {observe: 'response', }).subscribe(res => {
      callback(res)
    }, error => {
      callback(error)
    })
    
  }
}
