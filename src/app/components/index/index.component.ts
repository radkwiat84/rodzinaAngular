import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Father } from '../../father';
import { FatherService } from '../../shared_service/father.service';
import { Child } from '../../child';
import { ChildService } from '../../shared_service/child.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  constructor(private _router: Router, private _fatherService: FatherService, private _childService: ChildService) { }

  ngOnInit() {
  }

  startEvent() {
    let father = new Father();
    this._fatherService.setter(father);
    this._router.navigate(['createFather']);
  }

  searchEngine(){
    let child = new Child();
    this._childService.setter(child);
    this._router.navigate(['searchEngine']);
  }


}
