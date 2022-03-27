import { Routes, RouterModule } from '@angular/router';
import { StreamerListResolver } from './resolvers/streamer-list.resolver';
import { StreamerResolver } from './resolvers/streamer.resolver';
import { StreamerEditComponent } from './streamer/streamer-edit/streamer-edit.component';
import { StreamerListComponent } from './streamer/streamer-list/streamer-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: StreamerListComponent,
    resolve: { streamers: StreamerListResolver },
  },
  {
    path: 'streamer/:id',
    component: StreamerEditComponent,
    resolve: { streamer: StreamerResolver },
  }
];

export const RoutesRoutes = RouterModule.forChild(appRoutes);
