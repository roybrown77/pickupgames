﻿using System.Threading.Tasks;
using System.Web.Http;
using PickupGames.Domain.AccountManagement.Repositories;
using PickupGames.Domain.AccountManagement.Services;
using PickupGames.Domain.AccountManagement.Services.Interfaces;

namespace PickupGames.Controllers.AccountManagement
{
    [RoutePrefix("api/RefreshTokens")]
    public class RefreshTokensController : ApiController
    {
        private readonly IAuthService _authService;

        [Authorize(Users = "Admin")]
        [Route("")]
        public IHttpActionResult Get()
        {
            var authService = new AuthService(new MockAuthRepository());
            var tokens = authService.GetAllRefreshTokens();
            return Ok(tokens);
        }

        [AllowAnonymous]
        [Route("")]
        public async Task<IHttpActionResult> Delete(string tokenId)
        {
            var authService = new AuthService(new MockAuthRepository());
            await authService.RemoveRefreshToken(tokenId);
            return Ok();
        }
    }
}