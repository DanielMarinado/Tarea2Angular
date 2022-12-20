import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from '../services/gameofthrone.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit{

  gameofthrone:any;
  constructor(private gtservice:GameofthroneService){}

  ngOnInit(): void {
    this.obtenerGameOgThrone();
  }

  obtenerGameOgThrone(){
    this.gtservice.getGameOfThrone().subscribe( resp => {
      this.gameofthrone = resp;
    })
  }


  
}
