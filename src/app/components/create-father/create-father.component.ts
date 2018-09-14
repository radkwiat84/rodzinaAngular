import { Component, OnInit } from '@angular/core';
import { Father } from '../../father';
import { FatherService } from '../../shared_service/father.service';
import { Router } from '@angular/router';
import { Child } from '../../child';
import { ChildService } from '../../shared_service/child.service';

@Component({
  selector: 'app-create-father',
  templateUrl: './create-father.component.html',
  styleUrls: ['./create-father.component.css']
})
export class CreateFatherComponent implements OnInit {
  private father: Father;
  


  constructor(private _fatherService: FatherService, private _router: Router, private _childService: ChildService) { }

  ngOnInit() {
    this.father = this._fatherService.getter();
    console.log(this.father);

  }

  processForm() {
    this._fatherService.createFather(this.father).subscribe((check) => {
      console.log(check);
    });
    
    let child = new Child();
    this._childService.setter(child);
    this._router.navigate(['/createChild']);
    (error) => {
      console.log(error);
    }

  }


}
