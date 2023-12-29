import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  public draggableList = [
    {id:1,alt:"coffee",imgPath:'../../../assets/images/coffee.jpg',menuName:"Coffee"},
    {id:2,alt:"Tea",imgPath:'../../../assets/images/tea.jpg.crdownload',menuName:"Tea"},
    {id:3,alt:"Black-Coffee",imgPath:'../../../assets/images/blackcoffee1.jpg.crdownload',menuName:"Black-Coffee"},
    {id:4,alt:"Ginder-Tea",imgPath:'../../../assets/images/ginger',menuName:"Ginder-Tea"}]
  
  
    allowDrop(ev:any) {
      ev.preventDefault();
    }
    
     drag(ev:any) {
      ev.dataTransfer.setData("ItemID", ev.target.id);
    }
    
     drop(ev:any) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("ItemID");
      ev.target.appendChild(document.getElementById(data));
    }
}
