import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../servises/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService : HeaderService){

  }

  name:String='fakename'
  charges:String='whatever'
  objetive:String='fake'
  image:String=''
  email:String='noone'
  cel:String='0000'
  ubication:String='here'
  social:String='type'
  

  ngOnInit() : void {
    this.headerService.getHeader()
    .subscribe((date: any) => {
      this.name=date.name
      this.charges=date.charges
      this.objetive=date.objetive
      this.image=date.photo
      this.email=date.email
      this.cel=date.cel
      this.ubication=date.ubication
      this.social=date.social
    })
  }

}
