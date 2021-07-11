import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PodcastEpisode } from 'src/models/podcastEpisode';

@Component({
  selector: 'app-admin-podcast',
  templateUrl: './admin-podcast.component.html',
  styleUrls: ['./admin-podcast.component.less'],
})
export class AdminPodcastComponent implements OnInit {
  public episodes: Observable<PodcastEpisode[]>;
  public snapshots: DocumentChangeAction<PodcastEpisode>[];

  constructor(private firestore: AngularFirestore, private router: Router) {
    this.episodes = this.firestore
      .collection<PodcastEpisode>('/podcasts')
      .valueChanges();

    this.firestore
      .collection<PodcastEpisode>('/podcasts', (ref) =>
        ref.orderBy('timestamp', 'desc')
      )
      .snapshotChanges()
      .subscribe({ next: (val) => (this.snapshots = val) });
  }

  public editPodcast(id: string): void {
    this.router.navigate(['/admin/podcast/new'], {
      queryParams: { id: id },
    });
  }

  public deletePodcast(id: string): void {
    this.firestore.doc(`/podcasts/${id}`).delete();
  }

  ngOnInit(): void {}
}
