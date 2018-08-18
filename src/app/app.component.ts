import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gaga';

  hotcoldsel = ['Hot', 'Cold', 'Sweet', 'Slaty'];
  addssel = ['Mile', 'Sugar', 'Papper', 'Onion'];
  nutsel = ['--選択--', 'ピーナッツ', 'あーモンド', 'クルミ'];


  coffeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.coffeeForm = this.fb.group({
      name: 'ブレンド',
      taste: 'バランスのよい口当たり',
      hotCold: this.hotcoldsel[0],
      adds: this.fb.array([]),
      nut: this.nutsel[0]
    });
  }

  onCheckChanged(item: string, isChecked: boolean) {
    const formArray = <FormArray>this.coffeeForm.controls.adds;
    if (isChecked) {
      formArray.push(new FormControl(item));
    } else {
      const index = formArray.controls.findIndex(elm => elm.value === item);
      formArray.removeAt(index);
    }
  }
}
