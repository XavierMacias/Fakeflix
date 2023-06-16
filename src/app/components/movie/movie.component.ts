import { Component, Input } from '@angular/core';
import { MovieI } from '../../models/interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() infoMovie!: MovieI;
}
