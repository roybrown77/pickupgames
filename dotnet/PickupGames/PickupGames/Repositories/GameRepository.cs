﻿using System;
using System.Collections.Generic;
using PickupGames.Domain.Objects;

namespace PickupGames.Repositories
{
    public class GameRepository : IGameRepository
    {
        public void Add(Game game)
        {
        }

        public List<Game> FindBy(string location)
        {
            return new List<Game>
                       {
                           new Game
                               {
                                   Id = Guid.NewGuid(),
                                   Name = "touch football",
                                   Sport = "Football",
                                   GameDate = DateTime.Now.Date,
                                   GameTime = DateTime.Now.TimeOfDay,
                                   Location = "Boston, MA",
                                   LocationLat = "42.3756519",
                                   LocationLng = "-71.2353334",
                                   PlayerCount = 6,
                                   DistanceToLocation = "5.5 mi"
                               },
                           new Game
                               {
                                   Id = Guid.NewGuid(),
                                   Name = "3 on 3 basketball",
                                   Sport = "Basketball",
                                   GameDate = DateTime.Now.Date,
                                   GameTime = DateTime.Now.TimeOfDay,
                                   Location = "Atlanta, GA",
                                   LocationLat = "44.3756519",
                                   LocationLng = "-74.2353334",
                                   PlayerCount = 8,
                                   DistanceToLocation = "10.23 mi"
                               }
                       };
        }

        public List<Game> FindBy(SearchQuery searchQuery)
        {
            return new List<Game>
                       {
                           new Game
                               {
                                   Id = Guid.NewGuid(),
                                   Name = "touch football",
                                   Sport = "Football",
                                   GameDate = DateTime.Now.Date,
                                   GameTime = DateTime.Now.TimeOfDay,
                                   Location = "Boston, MA",
                                   LocationLat = "48.3756519",
                                   LocationLng = "-78.2353334",
                                   PlayerCount = 6,
                                   DistanceToLocation = "5.5 mi"
                               }
                       };
        }
    }
}
