import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes.routing';
import { RouterModule } from '@angular/router';
import { StreamerListComponent } from './streamer/streamer-list/streamer-list.component';
import { StreamerListResolver } from './resolvers/streamer-list.resolver';
import { StreamerEditComponent } from './streamer/streamer-edit/streamer-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StreamerResolver } from './resolvers/streamer.resolver';

@NgModule({
  declarations: [
    AppComponent,
    StreamerListComponent,
    StreamerEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [
    StreamerListResolver,
    StreamerResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }