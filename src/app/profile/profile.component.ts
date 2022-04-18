import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Repo } from '../repo';
import { catchError } from 'rxjs';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = 'Nyambura23';
  user!: User;
  repos: any;
  repo!: Repo;
  error: any = null;
  

 
  constructor(private userService: UserService) { }
  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.userService.getUserInfo(this.profile).subscribe((data) => {
        console.log('User: ', data);
        this.user = data;
      });
      this.userService.getRepo(this.profile).subscribe((data) => {
        console.log('Repo: ', data);
        this.repos = data;
      }),
        (this.profile = '');
    }
  }

  ngOnInit(): void {
    this.search('Nyambura23');
  }
  
   

}
