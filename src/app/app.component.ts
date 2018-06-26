import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ActionBarComponent } from './actionBar/action.bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild(ActionBarComponent) child;

    constructor() { }

    message:string;

    ngAfterViewInit() {
        this.message = this.child.data
    }
    title = 'app';
}
