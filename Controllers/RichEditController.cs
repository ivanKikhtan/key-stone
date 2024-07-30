using Microsoft.AspNetCore.Mvc;
using DevExpress.XtraRichEdit;
using System.Drawing;
using System.Text;
using System;

namespace AspNetCoreDemos.RichEdit {
    [Route("[action]")]
    public class RichEditController : Controller {
        public IActionResult Overview() {
            return View();
        }
        // Document Managment

        #region LoadAndSave
        public IActionResult LoadAndSave() {
            return View();
        }

        public IActionResult Export(string base64, string fileName, DevExpress.AspNetCore.RichEdit.DocumentFormat format) {
            byte[] fileContents = System.Convert.FromBase64String(base64);
            return Ok();
        }

        public IActionResult DocumentProtection() {
            return View();
        }
        #endregion
    }
}
