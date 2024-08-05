import { Component, OnInit } from '@angular/core';
import { Item } from '../model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit{
  items: Item[] = [];

  constructor(private service: ItemsService){

  }

  ngOnInit(): void {
      this.service.getItems().subscribe({
        next: value => this.items = value,
        error: err => console.log(err),
      });
  }

  handleDeletion(id:string) {
    console.log("in deletion");
    this.service.deleteItemById(id).subscribe(res => console.log(res));
  }
}
