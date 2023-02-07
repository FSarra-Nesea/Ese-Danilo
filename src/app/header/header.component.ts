import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

@Output() pageSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }
  onNavigate(page:string){
    this.pageSelected.emit(page)


  }
}
