import { Injectable } from '@angular/core';

//because we are making a request to the github api
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
    private username: string;
    private client_id = 'bbcb92d9ee42b4d9acf1';
    private client_secret = '0aae42d973936729d7251344bc98acd918425648';

    constructor(private _http: Http) {
        this.username = 'chibieee';
     }

     getUser() {
         return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
     }

     getRepos() {
         return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
     }

     updateUser(username:string) {
         this.username = username;
     }

}
