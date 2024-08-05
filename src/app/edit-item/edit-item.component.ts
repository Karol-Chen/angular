import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';
import { ActivatedRoute} from '@angular/router';
import { Item } from '../model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent implements OnInit{
  id:string ='';
  editForm!:FormGroup;
  oldItem!:Item;

  constructor(private service: ItemsService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id,"in edit");
    this.service.getItemById(this.id).subscribe(item => {
      this.oldItem = item;
      console.log(this.oldItem);
      this.initializeForm();
    });
  }

  initializeForm(): void {
    this.editForm = new FormGroup({
      id: new FormControl(this.oldItem?.id),
      name: new FormControl(this.oldItem?.name),
      price: new FormControl(this.oldItem?.price),
      quantity: new FormControl(this.oldItem?.quantity),
      category: new FormControl(this.oldItem?.category)
    });
  }

  handleEdition(){
    if(this.editForm.valid){
      const value = this.editForm.value;
      const { id, name, price, quantity, category} = value;
      let newItem = {
        id: id?id:this.oldItem.id,
        name: name?name:this.oldItem.name,
        price: price?price:this.oldItem.price,
        quantity: quantity?quantity:this.oldItem.quantity,
        category: category?category:this.oldItem.category
      }
      console.log(newItem);
      this.service.editItem(newItem).subscribe(
        {
          next: item => console.log(item),
          error: err => console.log(err)
        }
      );
      this.editForm.reset();
      console.log("submit handleEdition");
    }
  }
}
