import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IStreamer } from '../model/streamer.model';

@Component({
  selector: 'app-streamer-list',
  templateUrl: './streamer-list.component.html',
  styleUrls: ['./streamer-list.component.scss']
})
export class StreamerListComponent implements OnInit, OnDestroy {

  public streamers = new Array<IStreamer>();
  public displayedColumns = ['id', 'channel', 'watchTime', 'streamTime', 'peakViewers', 'averageViewers',
    'followers', 'followersGained', 'viewsGained', 'partnered', 'mature', 'language', 'edit'];
  private destroyed$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private ngZone: NgZone) { }

  public ngOnInit() {
    this.activatedRoute.data.pipe(takeUntil(this.destroyed$)).subscribe(data => this.streamers = data['streamers']);
  }

  public ngOnDestroy() {
    this.destroyed$.complete();
  }

  public editStreamer(streamer: IStreamer) {
    this.ngZone.run(() => this.router.navigate([`/streamer/${streamer.id}`]));
  }

  public addStreamer() {
    this.ngZone.run(() => this.router.navigate(['/add']));
  }
}
