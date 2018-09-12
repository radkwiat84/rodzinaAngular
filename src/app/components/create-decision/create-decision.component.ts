import { Component, OnInit } from '@angular/core';
import { Father } from '../../father';
import { FatherService } from '../../shared_service/father.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-decision',
  templateUrl: './create-decision.component.html',
  styleUrls: ['./create-decision.component.css']
})
export class CreateDecisionComponent implements OnInit {
  private father: Father;


  constructor(private _fatherService: FatherService, private _router: Router) { }

  ngOnInit() {
    this.father = this._fatherService.getter();
  }

  back(){
    this._router.navigate(['addFatherToFamily']);

  }

  processForm(){
    this._fatherService.addFatherToFamily(this.father).subscribe((father)=>{
      console.log(father);
    }, (error)=>{
      console.log(error);
    })
    this._router.navigate(['addChildToFamily']);
  }


}
