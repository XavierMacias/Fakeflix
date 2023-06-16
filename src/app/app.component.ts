import { Component } from '@angular/core';
import { FilmsI } from './models/interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  top10: FilmsI = {
    section: " más populares hoy",
    films: [{
        title: "La casa de papel",
        image: "./assets/images/Top10/1-papel.webp"
      }, {
        title: "La reina del flow",
        image: "./assets/images/Top10/2-reina.webp"
      },{
        title: "Titanes",
        image: "./assets/images/Top10/3-titanes.webp"
      },{
        title: "Lost in space",
        image: "./assets/images/Top10/4-lostinspace.webp"
      },{        
        title: "Donde caben dos",
        image: "./assets/images/Top10/5-dondecaben.webp"
      },{        
        title: "Aquí no hay quien viva",
        image: "./assets/images/Top10/6-aquinohay.webp"
      },{        
        title: "Black list",
        image: "./assets/images/Top10/7-blacklist.webp"
      },{        
        title: "Ricos y mimados",
        image: "./assets/images/Top10/8-ricos.webp"
      },{        
        title: "El poder del perro",
        image: "./assets/images/Top10/9-poder.webp"
      },{        
        title: "The good doctor",
        image: "./assets/images/Top10/10-gooddoctor.webp"
      }
    ]
  }
  comedyFilms: FilmsI = {
    section: "Comedia",
    films: [{
        title: "Casi 300",
        image: "./assets/images/Comedia/casi300.webp"
      }, {
        title: "Cazafantasmas",
        image: "./assets/images/Comedia/cazafantasmas.webp"
      },{
        title: "El Dictador",
        image: "./assets/images/Comedia/dictador.webp"
      },{
        title: "Érase una vez en Hollywood",
        image: "./assets/images/Comedia/erasehollywood.webp"
      },{        
        title: "Family Guy",
        image: "./assets/images/Comedia/familyguy.webp"
      },{
        title: "juerga",
        image: "./assets/images/Comedia/juerga.webp"
      }
    ]
  }

  terrorFilms: FilmsI = {
    section: "Terror",
    films: [{
      title: "Apostol",
      image: "./assets/images/Terror/apostol.jpg"
    }, {
      title: "La calle del terror",
      image: "./assets/images/Terror/calleterror.jpg"
    },{
      title: "Infierno bajo el agua",
      image: "./assets/images/Terror/infiernoagua.webp"
    },{
      title: "Insidious 2",
      image: "./assets/images/Terror/insidious2.webp"
    },{        
      title: "Life",
      image: "./assets/images/Terror/life.webp"
    },{
      title: "Malasaña",
      image: "./assets/images/Terror/malasana.webp"
    }
  ]
  }
  actionFilms: FilmsI = {
    section: "Acción",
    films: [{
      title: "El ejército de los muertos",
      image: "./assets/images/Accion/ejercitomuertos.jpg"
    }, {
      title: "El protector",
      image: "./assets/images/Accion/elprotector.webp"
    },{
      title: "The Equalizer 2",
      image: "./assets/images/Accion/equalizer2.webp"
    },{
      title: "Heat",
      image: "./assets/images/Accion/heat.webp"
    },{        
      title: "Jack Reacher",
      image: "./assets/images/Accion/jackreacher.webp"
    },{
      title: "Kill Bill Volumen 2",
      image: "./assets/images/Accion/killbill2.webp"
    }
  ]
  }
}
