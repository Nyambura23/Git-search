import { Component, OnInit } from '@angular/core';
// import { GithubService } from '../github.service';
// import { UserService } from '../user.service';
// import { User } from '../user';
// import { Repo } from '../repo';
// import { catchError } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // profile: any = 'Nyambura23';
  // user!: User;
  // repos: any;
  // repo!: Repo;
  // error: any = null;


  constructor( ) { }

// constructor(private userService: UserService) { }
//   search(searchTerm: string) {
//     if (searchTerm !== '') {
//       this.userService.getUserInfo(this.user).subscribe((data) => {
//         console.log('User: ', data);
//         this.user = data;
//       });
//       this.userService.getRepo(this.profile).subscribe((data) => {
//         console.log('Repo: ', data);
//         this.repos = data;
//       }),
//         (this.profile = '');
//     }
//   }

  ngOnInit(): void {
    // this.search('Nyambura23');
  }

}


