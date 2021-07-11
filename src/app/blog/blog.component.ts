import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/models/blogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
})
export class BlogComponent implements OnInit {
  posts: Observable<BlogPost[]>;
  constructor(firestore: AngularFirestore) {
    this.posts = firestore
      .collection<BlogPost>('blogs', (ref) => ref.orderBy('timestamp', 'desc'))
      .valueChanges();
  }

  ngOnInit(): void {}
}
