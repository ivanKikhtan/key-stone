using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreDemos.RichEdit {

    public class DefaultController : Controller {

        public IActionResult Index() {
            return RedirectToAction("Overview", "RichEdit");
        }

    }

}
