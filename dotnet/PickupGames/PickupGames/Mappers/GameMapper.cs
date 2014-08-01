﻿using PickupGames.Models;
using PickupGames.Objects;

namespace PickupGames.Mappers
{
    public static class GameMapper
    {
        public static Game ConvertGameCreateModelToGame(GameCreateModel gameModel)
        {
            return new Game
                       {
                           Name = gameModel.Name,
                           Sport = gameModel.Sport,
                           GameTime = gameModel.GameTime,
                           Location = gameModel.Location
                       };
        }
    }
}