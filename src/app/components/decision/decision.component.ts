import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../shared_service/child.service';
import { FamilyService } from '../../shared_service/family.service';
import { Router } from '@angular/router';
import { Family } from '../../family';
import { Child } from '../../child';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {


  constructor(private _childService: ChildService, private _familyService: FamilyService, private _router: Router) { }

  ngOnInit() {
  }
  
  goAndCreateFamily(){
    let family = new Family();
    this._familyService.setter(family);
    this._familyService.createFamily(family).subscribe((check)=>{
      console.log(check);
      this._router.navigate(['createFamily']);
    });

  };

  goAndCreateChild(){
    let child = new Child();
    this._childService.setter(child);
    this._router.navigate(['createChild']);
  };

}
