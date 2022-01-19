using Microsoft.AspNetCore.Mvc;
using Mission_2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_2.Controllers
{
    public class View1Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult grade_calc()
        {
            return View();
        }
        [HttpPost]
        public IActionResult grade_calc(grade_calc_model model)
        {
            return View();
        }
    }
}
