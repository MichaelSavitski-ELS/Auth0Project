using Auth0Project.Models;
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

        [HttpPost("login")]
        public async Task Login([FromBody] LoginTemplate loginTemplate)
        {
            await _auth0.Login(loginTemplate.UserName, loginTemplate.Password);
        }
    }
}