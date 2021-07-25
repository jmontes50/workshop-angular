import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  @Input() prod:any

  constructor() { }

  ngOnInit(): void {

    console.table(this.prod)
  }

}
