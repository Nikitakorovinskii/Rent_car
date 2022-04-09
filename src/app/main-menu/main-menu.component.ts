import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  balance ="Баланс:";
  sum = "1200"+"руб";
  clientName = "Никита";
  clientLastName ="Коровинский";
  priceCarOneDaytTarrif = "1800"+" руб";
  countDayOneDaytTarrif = "1 день";
  priceCarTenDaytTarrif = "1700"+" руб";
  countDayTenDaytTarrif = "2-10 дней";
  priceCarThirtyDaytTarrif = "1600"+" руб";
  countDayThirtyDaytTarrif = "10-30 дней";
  priceCarThirtyOneDaytTarrif = "1300"+" руб";
  countDayThirtyOneDaytTarrif = "31 и более дней";

  constructor() { }

  ngOnInit(): void {
  }

}