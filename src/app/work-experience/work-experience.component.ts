import { Component } from '@angular/core';
import { WorkExperienceService } from '../servises/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  WorkExperience : Array<any> = [];
  constructor(private service: WorkExperienceService) {}
  ngOnInit(): void {
    this.service.getworkExperience().subscribe(data => {this.WorkExperience=data
    console.log(data)
    })


   /* let work1={
      fecha : "2018-2022",
      ubicacion : "Cordoba, Ver",
      puesto: "Estudiante",
      logros : [
        {descripcion: "Pasar la prepa"}
      ]
    };
    this.WorkExperience.push(work1);}*/
  }

}
