import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../shared_service/child.service';
import { Child } from '../../child';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-child-to-family',
  templateUrl: './add-child-to-family.component.html',
  styleUrls: ['./add-child-to-family.component.css']
})
export class AddChildToFamilyComponent implements OnInit {

  private children: Child[];

  constructor(private _childService: ChildService, private _router: Router) { }

  ngOnInit() {
    this._childService.readChildrenWithoutFamily().subscribe((children) => {
      console.log(children);
      this.children = children;
    }, (error) => {
      console.log(error);
    });
  }

  processForm(child) {
    this._childService.addChildToFamily(child).subscribe((addedChild) => {
      console.log(addedChild);
      this.children.splice(this.children.indexOf(child), 1)
    }, (error) => {
      console.log(error);
    })
  }

  processChild(child) {
    this._childService.setter(child);
    this._router.navigate(['addChildDecision'])
  }

  stopCreatingFamily() {
    this._router.navigate(['readFamily']);
  }

}
