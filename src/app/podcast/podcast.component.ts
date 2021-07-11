import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { PodcastEpisode } from 'src/models/podcastEpisode';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.less'],
})
export class PodcastComponent implements OnDestroy, AfterViewInit {
  episodes: Observable<PodcastEpisode[]>;
  episodesSubscription: Subscription;

  @ViewChild('recent') recent: ElementRef;
  @ViewChild('previous') previous: ElementRef;

  showRecentEpisode: boolean = false;
  showPreviousEpisodes: boolean = false;

  constructor(firestore: AngularFirestore, private sanitizer: DomSanitizer) {
    this.episodes = firestore
      .collection<PodcastEpisode>('podcasts', (ref) =>
        ref.orderBy('timestamp', 'desc')
      )
      .valueChanges();
  }
  ngAfterViewInit(): void {
    this.episodesSubscription = this.episodes.subscribe({
      next: (episodes) => {
        this.showRecentEpisode = episodes.length > 1;
        this.showPreviousEpisodes = episodes.length > 2;
        this.recent.nativeElement.innerHTML = '';
        this.previous.nativeElement.innerHTML = '';
        let counter = 0;

        for (let episode of episodes) {
          if (counter === 0) {
            this.recent.nativeElement.classList.remove('hidden');
            this.recent.nativeElement.innerHTML += this.sanitizer.sanitize(
              SecurityContext.NONE,
              episode.embed
            );
          } else {
            this.previous.nativeElement.classList.remove('hidden');
            this.previous.nativeElement.innerHTML += this.sanitizer.sanitize(
              SecurityContext.NONE,
              episode.embed
            );
          }
          counter++;
        }
      },
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.episodesSubscription.unsubscribe();
  }
}
