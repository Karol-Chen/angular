import { AddItemComponent } from "./add-item/add-item.component";
import { EditItemComponent } from "./edit-item/edit-item.component";
import { ItemComponent } from "./item/item.component";
import { ItemsComponent } from "./items/items.component";

export const routes = [
    {path:'',component:ItemsComponent},
    {path:'items',component:ItemsComponent},
    {path:'items', children:[
        {path:'add',component:AddItemComponent},
        {path:'edit/:id',component: EditItemComponent},
        {path:'item/:id',component: ItemComponent}
    ]},
]