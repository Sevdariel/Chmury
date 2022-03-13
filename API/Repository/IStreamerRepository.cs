using Apka.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Apka.Repository
{
    public interface IStreamerRepository
    {
        Task<List<Streamer>> GetAllStreamers();
        Task<Streamer> GetStreamerById(int id);
    }
}
