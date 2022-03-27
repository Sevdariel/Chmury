export interface IStreamer {
    id: number,
    channel: string,
    watchTime: number,
    streamTime: number,
    peakViewers: number,
    averageViewers: number,
    followers: number,
    followersGained: number,
    viewsGained: number,
    partnered: boolean,
    mature: boolean,
    language: string,
}

export interface IStreamerDto {
    channel: string,
    watchTime: number,
    streamTime: number,
    peakViewers: number,
    averageViewers: number,
    followers: number,
    followersGained: number,
    viewsGained: number,
    partnered: boolean,
    mature: boolean,
    language: string,
}