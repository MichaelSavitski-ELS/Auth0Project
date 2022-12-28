using Auth0Project.RefitClients;
using Microsoft.AspNetCore.Mvc;

namespace Auth0Project.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly IAuth0RefitClient _auth0;

        public LoginController(IAuth0RefitClient auth0)
        {
            _auth0 = auth0;
        }
    }
}