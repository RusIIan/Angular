import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() numberCreate = new EventEmitter<number>();
  num:number=0;
  numberInterval;
  startGame(){
    this.numberInterval=setInterval(()=>{
      this.numberCreate.emit(this.num);
      this.num++; 
    },1000)
  }
  stopGame(){
    clearInterval(this.numberInterval )
  }
}
