import { Component } from '@angular/core';
import { SkillsService } from '../servises/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  
  skills : Array<any> = [];
  constructor(private service: SkillsService) {}
  ngOnInit(): void {
    this.service.getskills().subscribe(data => {this.skills=data.habilidades;
    console.log(data)})
    }    

}
