import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  contacts = [
    {id: 1, name: "Development"},
    {id: 2, name: "Art"},
    {id: 3, name: "Language"},
  ];

  submit(course){
    console.log(course);
  }
}
