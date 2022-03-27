import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStreamer, IStreamerDto } from '../model/streamer.model';

@Injectable({
    providedIn: 'root'
})
export class StreamerService {

    private baseUrl = 'http://localhost:5000/api';

    constructor(private httpClient: HttpClient) { }

    public getAllStreamers(): Observable<Array<IStreamer>> {
        return this.httpClient.get<Array<IStreamer>>(`${this.baseUrl}/streamer`);
    }

    public getStreamer(id: number): Observable<IStreamer> {
        return this.httpClient.get<IStreamer>(`${this.baseUrl}/streamer/${id}`);
    }

    public saveStreamer(streamerDto: IStreamerDto) {
        return this.httpClient.post<IStreamerDto>(`${this.baseUrl}/streamer/add`, streamerDto);
    }

    public updateStreamer(streamerDto: IStreamerDto, streamerId: number) {
        return this.httpClient.post<IStreamerDto>(`${this.baseUrl}/streamer/${streamerId}`, streamerDto);
    }
}
