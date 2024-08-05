import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  id!:string;
  item!:Item;

  constructor(private service:ItemsService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getItemById(this.id).subscribe({
      next: item => this.item = item,
      error: err => console.log(err)
    })
  }
}
