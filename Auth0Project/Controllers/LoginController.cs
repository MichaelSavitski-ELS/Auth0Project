using Auth0Project.Models;
using Auth0Project.RefitClients;
using Microsoft.AspNetCore.Mvc;

namespace Auth0Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IAuth0RefitClient _auth0;

        public LoginController(IAuth0RefitClient auth0)
        {
            _auth0 = auth0;
        }

        [HttpPost]
        public async Task<bool> Post([FromBody] LoginTemplate loginTemplate)
        {
            await _auth0.Login(loginTemplate.UserName, loginTemplate.Password);

            return true;
        }
    }
}