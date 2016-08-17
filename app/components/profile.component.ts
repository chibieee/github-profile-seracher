import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    user: any[];
    repos: any[];

    constructor(private _githubService: GithubService) {
        this._githubService.getUser().subscribe(user => {
            this.user = user;
        })

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        })
     }

    ngOnInit() { }

}