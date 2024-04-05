import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
type Post = {title: string, nbr_like: number, type: string};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ex-observable';

  post$: Observable<Post[]> = of([
    {title: 'Angular', nbr_like: 10, type: 'angular'},
    {title: 'React', nbr_like: 20, type: 'react'},
    {title: 'Vue', nbr_like: 30, type: 'vue'},
    {title: 'Ngrx', nbr_like: 40, type: 'angular'},  
    {title: 'Redux', nbr_like: 50, type: 'react'},
    {title: 'Vuex', nbr_like: 60, type: 'vue'},
  ]);


  onLike(post: {title: string, nbr_like: number}) {
    post.nbr_like++;
  }

  getPostType(post: Post[]): string[] {
    return Array.from(new Set(post.map(p => p.type)));
  }

  getPostByType(post: Post[], type: string): Post[] {
    return post.filter(p => p.type === type);
  }

}
