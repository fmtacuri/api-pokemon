import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class PokemonService {
    private apiAuthUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getPokemon() {
        return this.http.get(this.apiAuthUrl).toPromise();
    }
}
