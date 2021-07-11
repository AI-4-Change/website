import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PodcastEpisode } from 'src/models/podcastEpisode';

@Component({
  selector: 'app-admin-podcast-new',
  templateUrl: './admin-podcast-new.component.html',
  styleUrls: ['./admin-podcast-new.component.less'],
})
export class AdminPodcastNewComponent implements OnInit {
  private episode: PodcastEpisode;
  private id: string;

  private isUpdating = false;

  public createForm = this.fb.group({
    title: ['', Validators.required],
    embed: ['', Validators.required],
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
        .doc(`/podcasts/${this.id}`)
        .set(this.createForm.value, { merge: true })
        .then(() => {
          this.router.navigate(['/podcast']);
        });
    } else {
      this.firestore
        .collection<PodcastEpisode>('/podcasts')
        .add({ ...this.createForm.value, timestamp: new Date() })
        .then((ref) => {
          this.firestore
            .doc(`/podcasts/${ref.id}`)
            .set({ id: ref.id }, { merge: true });
        })
        .then(() => {
          this.router.navigate(['podcast']);
        });
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        this.id = params.id;
        if (this.id) {
          this.firestore
            .doc<PodcastEpisode>(`/podcasts/${this.id}`)
            .get()
            .subscribe({
              next: (post) => {
                this.isUpdating = true;
                console.log(post.data());
                this.episode = post.data();
                this.createForm.setValue({
                  title: this.episode.title,
                  embed: this.episode.embed,
                });
              },
            });
        }
      },
    });
  }
}
