import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  addForm = new FormGroup({
    id : new FormControl('',[Validators.required]),
    name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    price : new FormControl('',[Validators.required]),
    quantity : new FormControl('',[Validators.required]),
    category : new FormControl('',[Validators.required])
  });

  constructor(private service:ItemsService) {

  }

  handleSubmit(){
    if(this.addForm.valid){
      const formValue = this.addForm.value;
      const {id, name, price, quantity, category} = formValue;
      if(id&&name&&price&&quantity&&category){
        const newItem = {
          id:+id,
          name:name+'',
          price:+price,
          quantity:+quantity,
          category:category
        }
  
        this.service.addItem(newItem).subscribe(
          {next: res =>console.log(res),
          error: err => console.error(err)}
        );
        this.addForm.reset();
      }
    }
  }
}
