﻿using Ninject.Modules;
using PickupGames.Api.Repositories;
using PickupGames.Api.Repositories.Interfaces;
using PickupGames.Api.Repositories.Mocks;
using System;
using System.Security.Cryptography;

namespace PickupGames.Api.Utilities
{
    public static class Helpers
    {
        public static string GetHash(string input)
        {
            HashAlgorithm hashAlgorithm = new SHA256CryptoServiceProvider();

            byte[] byteValue = System.Text.Encoding.UTF8.GetBytes(input);

            byte[] byteHash = hashAlgorithm.ComputeHash(byteValue);

            return Convert.ToBase64String(byteHash);
        }
    }
}