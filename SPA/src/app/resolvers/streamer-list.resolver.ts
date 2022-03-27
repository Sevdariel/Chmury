import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { IStreamer } from '../streamer/model/streamer.model';
import { StreamerService } from '../streamer/services/streamer.service';

@Injectable()
export class StreamerListResolver implements Resolve<Array<IStreamer>> {

  constructor(private streamerService: StreamerService, private router: Router) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Array<IStreamer>> {
    return this.streamerService.getAllStreamers().pipe(
      catchError(error => {
        this.router.navigate(['/']);
        return of();
      }),
    );
  }


}
