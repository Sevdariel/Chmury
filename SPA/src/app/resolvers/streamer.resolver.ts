import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { IStreamer } from '../streamer/model/streamer.model';
import { StreamerService } from '../streamer/services/streamer.service';

@Injectable()
export class StreamerResolver implements Resolve<IStreamer> {

  constructor(private streamerService: StreamerService, private router: Router) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<IStreamer> {
    return this.streamerService.getStreamer(route.params['id']).pipe(catchError(() => {
      this.router.navigate(['/']);
      return of();
    }));
  }
}
