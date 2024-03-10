import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('acc') accordion: NgbAccordionModule;
  activeIds: string[] = []

  constructor(public dataService:DataService) { 
    dataService.capabilities.forEach((capability, i) => {
      this.activeIds.push("panel" + i);
    });
    console.log(this.activeIds);
  }

  ngOnInit(): void {
  }



}
