﻿using System;
using System.Collections.Generic;
using System.Web.Mvc;
using PickupGames.Domains;
using PickupGames.Mappers;
using PickupGames.Models;

namespace PickupGames.Controllers
{
    public class HomeController : ControllerBase
    {
        public ActionResult Index()
        {
            var model = new HomePageModel
                            {
                                Game = new GameCreateModel(),
                                Games = new List<GameModel>
                                               { 
                                                   new GameModel
                                                          {
                                                              Name = "touch football",
                                                              Sport = "Football",
                                                              GameDateTime = DateTime.Now,
                                                              Location = "Boston, MA",
                                                              PlayerCount = 6,
                                                              DistanceToLocation = "5.5 mi"
                                                          },
                                                    new GameModel
                                                          {
                                                              Name = "3 on 3 basketball",
                                                              Sport = "Basketball",
                                                              GameDateTime = DateTime.Now.Add(new TimeSpan(3)),
                                                              Location = "Atlanta, GA",
                                                              PlayerCount = 8,
                                                              DistanceToLocation = "10.23 mi"
                                                          } 
                                               },
                                GameSearchModel = new GameSearchModel()
                            };

            return View(model);
        }

        [HttpGet]
        public JsonResult GetGames()
        {
            var model = new HomePageModel
            {
                Game = new GameCreateModel(),
                Games = new List<GameModel>
                                               { 
                                                   new GameModel
                                                          {
                                                              Name = "touch football",
                                                              Sport = "Football",
                                                              GameDateTime = DateTime.Now,
                                                              Location = "Boston, MA",
                                                              PlayerCount = 6,
                                                              DistanceToLocation = "5.5 mi"
                                                          },
                                                    new GameModel
                                                          {
                                                              Name = "3 on 3 basketball",
                                                              Sport = "Basketball",
                                                              GameDateTime = DateTime.Now.Add(new TimeSpan(3)),
                                                              Location = "Atlanta, GA",
                                                              PlayerCount = 8,
                                                              DistanceToLocation = "10.23 mi"
                                                          } 
                                               }
            };

            return Json(model, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public JsonResult CreateGame(GameCreateModel gameModel)
        {
            var gameDomain = new GameDomain();
            var game = GameMapper.ConvertGameCreateModelToGame(gameModel);
            var response = gameDomain.CreateGame(game);
            return Json(response);
        }

        [HttpPost]
        public JsonResult SearchGames(GameSearchModel searchModel)
        {
            return new JsonResult();
        }
    }
}