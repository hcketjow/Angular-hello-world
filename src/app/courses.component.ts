import { Component, NgModule } from '@angular/core';

// Pieps

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
        {{course.title | uppercase | lowercase}}<br/>
        {{course.students | number}}<br/>
        {{course.rating | number: '2.1-1'}}<br/>
        {{course.price | currency: 'AUD': true: '3.2-2'}}<br/>
        {{course.releaseData | date: 'shortDate'}}<br/>
    `
})
export class CoursesComponent{
    course = {
        title: 'The Complete Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseData: new Date(2016, 3, 1)
    };
}
