import {Component,OnInit } from '@angular/core';
import {ColorPickerDirective} from '../../../components/colorpicker/colorpicker';

@Component({
  selector: 'colorPicker',
  templateUrl: './app/components/colorpicker/colorpicker.html',
  directives: [ColorPickerDirective]
})
export class Colorpicker {
    private color: string = "#127bdc";
    private color2: string = "#fff500";

}
