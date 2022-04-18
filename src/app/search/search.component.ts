import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class searchComponent implements OnInit {
  @Output()  newUsername=new EventEmitter()
  username:string=""
  submitForm(username:string){
    this.newUsername.emit(username)
   
    
  }

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {

  }

}