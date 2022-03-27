namespace Apka.Dto
{
    public class StreamerForUpdateDto
    {
        public string Channel { get; set; }
        public ulong WatchTime { get; set; }
        public int StreamTime { get; set; }
        public int PeakViewers { get; set; }
        public int AverageViewers { get; set; }
        public int Followers { get; set; }
        public int FollowersGained { get; set; }
        public ulong ViewsGained { get; set; }
        public bool Partnered { get; set; }
        public bool Mature { get; set; }
        public string Language { get; set; }
    }
}
