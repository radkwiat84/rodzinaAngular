import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../shared_service/child.service';
import { Child } from '../../child';
import { Router } from '@angular/router';
import { FamilyService } from '../../shared_service/family.service';
import { Family } from '../../family';

@Component({
  selector: 'app-create-child',
  templateUrl: './create-child.component.html',
  styleUrls: ['./create-child.component.css']
})
export class CreateChildComponent implements OnInit {
  private child: Child;
  private family: Family;

  constructor(private _childService: ChildService, private _router: Router, private _familyService: FamilyService) { }

  ngOnInit() {
    this.child = this._childService.getter();
  }

  processForm() {
    this._childService.createChild(this.child).subscribe((check) => {
      console.log(check);
      this._router.navigate(['decision']);
    });
    // this.refreshSite();
    (error) => {
      console.log(error);
    }
  }

  // goAndCreateFamily(){
  //   let family = new Family();
  //   this._familyService.setter(family);
  //   this._familyService.createFamily(family).subscribe((check)=>{
  //     console.log(check);
  //     this._router.navigate(['/createFamily']);
  //   });

  // }

  //tutaj nie przekazuje modelu dziecka... 
  refreshSite() {
    window.location.reload();
    let child = new Child();
    this._childService.setter(child);
  }
}
