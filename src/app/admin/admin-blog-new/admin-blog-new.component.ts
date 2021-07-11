import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from 'src/models/blogPost';

@Component({
  selector: 'app-admin-blog-new',
  templateUrl: './admin-blog-new.component.html',
  styleUrls: ['./admin-blog-new.component.less'],
})
export class AdminBlogNewComponent implements OnInit {
  public post: BlogPost;
  private id: string;

  private isUpdating = false;

  public createForm = this.fb.group({
    title: ['', Validators.required],
    desc: ['', Validators.required],
    author: ['', Validators.required],
    link: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private router: Router
  ) {}

  onFormSubmit(): void {
    if (this.isUpdating) {
      this.firestore
        .doc(`/blogs/${this.id}`)
        .set(this.createForm.value, { merge: true })
        .then(() => {
          this.router.navigate(['/blog']);
        });
    } else {
      this.firestore
        .collection<BlogPost>('/blogs')
        .add({ ...this.createForm.value, timestamp: new Date() })
        .then((ref) => {
          this.firestore
            .doc(`/blogs/${ref.id}`)
            .set({ id: ref.id }, { merge: true });
        })
        .then(() => {
          this.router.navigate(['blog']);
        });
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        this.id = params.id;
        if (this.id) {
          this.firestore
            .doc<BlogPost>(`/blogs/${this.id}`)
            .get()
            .subscribe({
              next: (post) => {
                this.isUpdating = true;
                console.log(post.data());
                this.post = post.data();
                this.createForm.setValue({
                  title: this.post.title,
                  desc: this.post.desc,
                  author: this.post.author,
                  link: this.post.link,
                });
              },
            });
        }
      },
    });
  }
}
