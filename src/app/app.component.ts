import { Component, OnInit } from '@angular/core';
import { CheckboxConfig, CheckboxType } from './components/checkbox/checkbox/checkbox.component';
import { CheckboxGroupConf, CheckboxAlignType } from './components/checkbox-group/checkbox-group/checkbox-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'ng-checkbox-group';

  config: CheckboxGroupConf = {
    //align: CheckboxAlignType.row,
    list:[{
      type: CheckboxType.primary,
      label: 'primary',
      value: 1
    },{
      type: CheckboxType.info,
      circle:true,
      label: 'info',
      value: 2
    },{
      type: CheckboxType.warning,
      label: 'warning',
      value: 3
    },{
      circle:true,
      type: CheckboxType.danger,
      label: 'danger',
      value: 3
    }]
  };

  checkeds:boolean[] = []

  checkBoxChange() {
    console.log(this.checkeds)
  }
 
}
