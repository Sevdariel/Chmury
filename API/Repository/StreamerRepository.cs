using Apka.API.Data;
using Apka.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Apka.Repository
{
    public class StreamerRepository : IStreamerRepository
    {
        public StreamerRepository(DataContext context)
        {
            this.context = context;
        }
        public async Task<List<Streamer>> GetAllStreamers()
        {
            var streamers = await context.Streamers.ToListAsync();

            return streamers;
        }

        public async Task<Streamer> GetStreamerById(int id)
        {
            var streamer = await context.Streamers.FirstOrDefaultAsync(streamer => streamer.Id == id);

            return streamer;
        }

        private readonly DataContext context;
    }
}
