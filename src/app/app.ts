import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import { Colorpicker } from './components/colorpicker/colorpicker';

@Component({
  selector: "md2-app",
  templateUrl: "./app/app.html",
  directives: [RouterLink, ROUTER_DIRECTIVES,Colorpicker]
})

@RouteConfig([
  { path: '/Colorpicker', name: 'Colorpicker', component: Colorpicker }
])
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log("Application component initialized ...");
  }
}