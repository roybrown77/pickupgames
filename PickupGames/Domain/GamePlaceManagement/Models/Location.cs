﻿using PickupGames.Domain.GameManagement.Models;

namespace PickupGames.Domain.GamePlaceManagement.Models
{
    public class Location
    {
        public string Address { get; set; }
        public string Lat { get; set; }
        public string Lng { get; set; }
        public Distance DistanceToCenterLocation { get; set; }
        public string ImageUrl { get; set; }
    }
}