import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ex-observable';

  post$: Observable<{title: string, nbr_like: number}[]> = of([
    {title: 'Angular', nbr_like: 10},
    {title: 'React', nbr_like: 20},
  ]);

  onLike(post: {title: string, nbr_like: number}) {
    post.nbr_like++;
  }

}
