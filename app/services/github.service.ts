import { Injectable } from '@angular/core';

//because we are making a request to the github api
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
    private username: string;

    constructor(private _http: Http) {
        this.username = 'chibieee';
     }

     getUser() {
         return this._http.get('http://api.github.com/users/' + this.username)
            .map(res => res.json())
     }

     getRepos() {
         return this._http.get('http://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json())
     }

}
