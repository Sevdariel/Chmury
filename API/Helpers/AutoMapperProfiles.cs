using Apka.Dto;
using Apka.Models;
using AutoMapper;

namespace Apka.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Streamer, StreamerDto>();
            CreateMap<StreamerDto, Streamer>();
        }
    }
}
