import { Component, OnInit } from '@angular/core';
import {Father} from '../../father';
import { FatherService } from '../../shared_service/father.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-father',
  templateUrl: './create-father.component.html',
  styleUrls: ['./create-father.component.css']
})
export class CreateFatherComponent implements OnInit {
  private father:Father;
  

  constructor(private _fatherService: FatherService, private _router: Router) { }

  ngOnInit() {
    this.father = this._fatherService.getter();
    
  }

processForm(){
   this._fatherService.createFather(this.father).subscribe((check)=>{
      console.log(check);
    });
    // this._router.navigate(['/']);
    (error)=> {
      console.log(error);
    }
    
  }
  

}
