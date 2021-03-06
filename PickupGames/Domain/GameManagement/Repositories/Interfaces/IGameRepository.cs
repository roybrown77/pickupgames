﻿using System;
using System.Collections.Generic;
using PickupGames.Domain.GameManagement.Models;
using PickupGames.Domain.GameManagement.Repositories.Messaging;

namespace PickupGames.Domain.GameManagement.Repositories.Interfaces
{
    public interface IGameRepository
    {
        void Add(Game game);
        void Save(Guid id, Game game);
        void Delete(Guid id);
        List<Game> FindAll();
        List<Game> FindBy(string location);
        List<Game> FindBy(GameSearchQuery gameSearchQuery);        
    }
}
