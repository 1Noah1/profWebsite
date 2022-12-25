import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  CARDS = [
    {
      name: 'Über mich',
      show: false, // Gibt an ob eine Card ausgeklappt ist, standardmäßig dementsprechend auf false
    },
    {
      name: 'Links',
      show: false, // Gibt an ob eine Card ausgeklappt ist, standardmäßig dementsprechend auf false
    },
    {
      name: 'Kontakt mit Frauen',
      show: false, // Gibt an ob eine Card ausgeklappt ist, standardmäßig dementsprechend auf false
    }
  ]

  //set card.show true when card of CARDS is hovered
  onHover(card: { show: boolean; }) {
    card.show = true;
  }
}
