import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/models/blogPost';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.less'],
})
export class AdminBlogComponent implements OnInit {
  public blogs: Observable<BlogPost[]>;
  public snapshots: DocumentChangeAction<BlogPost>[];

  constructor(private firestore: AngularFirestore, private router: Router) {
    this.blogs = this.firestore.collection<BlogPost>('/blogs').valueChanges();
    this.firestore
      .collection<BlogPost>('/blogs', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .subscribe({ next: (val) => (this.snapshots = val) });
  }

  editBlog(id: string): void {
    this.router.navigate(['/admin/blog/new'], {
      queryParams: { id: id },
    });
  }

  deleteBlog(id: string): void {
    if (confirm('Are you sure you want to delete this blog post?')) {
      console.log(`deleting /blogs/${id}`);
      this.firestore.doc(`/blogs/${id}`).delete();
    }
  }

  ngOnInit(): void {}
}
