﻿using System.Web.Mvc;
using System.Web.Routing;

namespace PickupGames
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               name: "2",
               url: "Games/SearchByAjax/{location}/{page}",
               defaults: new { controller = "Games", action = "SearchByAjax", location = "usa", page = 1 }
            );       

            routes.MapRoute(
               name: "1",
               url: "Games/{action}/{location}/{page}",
               defaults: new { controller = "Games", action = "Search", location="usa", page = 1 }
            );       

            routes.MapRoute(
                name: "0",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}