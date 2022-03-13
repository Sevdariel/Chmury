using Apka.Models;
using Microsoft.EntityFrameworkCore;

namespace Apka.API.Data
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseNpgsql(@"Host=localhost;Username=postgres;Password=root;Database=streamers");

        public DbSet<Streamer> Streamers { get; set; }
    }
}
