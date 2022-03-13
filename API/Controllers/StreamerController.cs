using Apka.Dto;
using Apka.Models;
using Apka.Repository;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Apka.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StreamerController : ControllerBase
    {
        public StreamerController(IStreamerRepository streamerRepository, IMapper mapper)
        {
            this.streamerRepository = streamerRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetStreamers()
        {
            var streamers = await streamerRepository.GetAllStreamers();

            var streamerToReturn = mapper.Map<IList<StreamerDto>>(streamers);

            return Ok(streamerToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStreamer(int id)
        {
            var streamer = await streamerRepository.GetStreamerById(id);

            var streamerToReturn = mapper.Map<StreamerDto>(streamer);

            return Ok(streamerToReturn);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddNewStreamer(StreamerDto streamerDto)
        {
            var streamerToCreate = mapper.Map<Streamer>(streamerDto);

            var createdStreamer = await streamerRepository.AddNewStreamer(streamerToCreate);

            var streamerToReturn = mapper.Map<StreamerDto>(createdStreamer);

            return CreatedAtRoute("GetStreamers", new { controller = "Streamer" }, streamerToReturn);
        }


        private readonly IStreamerRepository streamerRepository;
        private readonly IMapper mapper;
    }
}
