import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePosts(title: string, content: string) {
    const postData: Post = { title, content };

    // Send Http request
    // console.log(postData);
    // an observable wraps the request
    this.http.post<{ name: string }>('https://ng-complete-guide-7b46e.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response' // or default 'body'
      }
    )
      .subscribe(responseData => { // subscribe gives access to response
        console.log(responseData); // http automatically extracts response data, body
      }, error => {
        this.error.next(error.message); // emits error subject
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty'); // overwriting previous value, because is immutable
    searchParams = searchParams.append('custom', 'key');
    return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-7b46e.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams
      }
    )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete('https://ng-complete-guide-7b46e.firebaseio.com/posts.json', {
        observe: 'events'
      })
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body); // body is null i a delete request
          }
        })
      );
  }

}
