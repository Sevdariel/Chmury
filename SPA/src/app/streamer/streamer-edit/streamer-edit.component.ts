import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { StreamerService } from '../services/streamer.service';
import { Subject, takeUntil } from 'rxjs';
import { IStreamerDto } from '../model/streamer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-streamer-edit',
  templateUrl: './streamer-edit.component.html',
  styleUrls: ['./streamer-edit.component.scss']
})
export class StreamerEditComponent implements OnInit {

  public form: FormGroup;
  private destroyed$ = new Subject();

  constructor(formBuilder: FormBuilder, private streamerService: StreamerService, private router: Router,
    private activatedRoute: ActivatedRoute, private ngZone: NgZone) {
    this.form = formBuilder.group({
      channel: new FormControl(undefined),
      watchTime: new FormControl(undefined),
      streamTime: new FormControl(undefined),
      peakViewers: new FormControl(undefined),
      averageViewers: new FormControl(undefined),
      followers: new FormControl(undefined),
      followersGained: new FormControl(undefined),
      viewsGained: new FormControl(undefined),
      partnered: new FormControl(undefined),
      mature: new FormControl(undefined),
      language: new FormControl(undefined),
    });
  }

  public ngOnInit(): void {
    if (this.router.url.includes('streamer')) {
      this.activatedRoute.data.pipe(takeUntil(this.destroyed$)).subscribe(data => {
        const formData = data['streamer'];
        this.form.setValue({
          channel: formData.channel,
          watchTime: formData.watchTime,
          streamTime: formData.streamTime,
          peakViewers: formData.peakViewers,
          averageViewers: formData.averageViewers,
          followers: formData.followers,
          followersGained: formData.followersGained,
          viewsGained: formData.viewsGained,
          partnered: formData.partnered,
          mature: formData.mature,
          language: formData.language,
        });
      });
    }
  }

  public save() {
    const streamerDto = this.createDto();

    if (this.router.url.includes('streamer')) {
      const streamerId = +this.activatedRoute.snapshot.paramMap.get('id')!;
      this.streamerService.updateStreamer(streamerDto, streamerId).pipe(takeUntil(this.destroyed$)).subscribe(() => this.ngZone.run(() => this.router.navigate(['/'])));
    } else {
      this.streamerService.saveStreamer(streamerDto).pipe(takeUntil(this.destroyed$)).subscribe(() => this.ngZone.run(() => this.router.navigate(['/'])));
    }
  }


  public close() {
    this.router.navigate(['/']);
  }


  private createDto(): IStreamerDto {
    return {
      channel: this.form.get('channel')?.value,
      watchTime: this.form.get('watchTime')?.value,
      streamTime: this.form.get('streamTime')?.value,
      peakViewers: this.form.get('peakViewers')?.value,
      averageViewers: this.form.get('averageViewers')?.value,
      followers: this.form.get('followers')?.value,
      followersGained: this.form.get('followersGained')?.value,
      viewsGained: this.form.get('viewsGained')?.value,
      partnered: this.form.get('partnered')?.value,
      mature: this.form.get('mature')?.value,
      language: this.form.get('language')?.value,
    }
  }
}
