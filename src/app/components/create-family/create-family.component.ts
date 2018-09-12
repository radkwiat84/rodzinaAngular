import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../../shared_service/family.service';
import { Family } from '../../family';
import { Father } from '../../father';
import { Child } from '../../child';
import { FatherService } from '../../shared_service/father.service';
import { ChildService } from '../../shared_service/child.service';
import { ChildrenOutletContexts, Router } from '@angular/router';


@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {
  private id: Number;
  private families: Family[];
  private fathers: Father[];
  private children: Child[];
  private family: Family;
  private father: Father;



  constructor(private _familyService: FamilyService, private _fatherService: FatherService, private _router: Router, private _childService: ChildService) { }

  ngOnInit() {
    this._fatherService.readFathers().subscribe((fathers) => {
      let fathersWithoutFamily: Father[] = [];
      for (let father of fathers) {
        if (father.family == null) {
          fathersWithoutFamily.push(father);
        }
      }
      this.fathers = fathersWithoutFamily;
    }, (error) => {
      console.log(error);
    });

    // this._childService.readChildren().subscribe((children) => {
    //   this.children = children;
    // }, (error) => {
    //   console.log(error);
    // });

    // this._familyService.readFamilies().subscribe((families) => {
    //   this.family = families[families.length - 1];
    //   console.log(this.family.id);
    // });
  }

  processFather(father) {
    this._fatherService.setter(father);
    this._router.navigate(['creatingDecision']);
  }

  // addChildToFamily(child) {
  //   this._childService.setter(child);
  //   console.log(child.id);
  // }


}


