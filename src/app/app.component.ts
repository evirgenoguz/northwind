import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind'; //typescript te böyle tip güvenli yapılır
  user: string = "Oguz Evirgen";
  
}

//datayı yönettiğimiz yer bu component dosyası
//component html inin datasını yönettiğimiz yer