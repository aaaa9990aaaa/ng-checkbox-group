import { Component, forwardRef, Input } from '@angular/core';
import { CheckboxType, CheckboxConfig } from '../../checkbox/checkbox/checkbox.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
})
export class CheckboxGroupComponent implements ControlValueAccessor {
 
  constructor() { }

  @Input()
  config:CheckboxGroupConf;

  checkedList:boolean[] = []

  change = (val:any)=>{}

  writeValue(obj: any): void {
    if(obj) {
      this.checkedList = obj
    }
  }
  registerOnChange(fn: any): void {
    this.change = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error("Method not implemented.");
  }

}

export interface CheckboxGroupConf {
  align?:CheckboxAlignType,
  list:CheckboxConfig[]
}

export enum CheckboxAlignType {
  column = 'column',
  row = 'row'
}