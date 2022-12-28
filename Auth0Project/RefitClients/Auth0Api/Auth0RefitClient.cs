namespace Auth0Project.RefitClients
{
    public class Auth0RefitClient : IAuth0RefitClient
    {
        private IAuth0Api _auth0Api;

        public Auth0RefitClient(IAuth0Api auth0Api)
        {
            _auth0Api = auth0Api;
        }

        public async Task Login(string userName, string password)
        {
            var token = await GetTokenAsync();

            return;
        }

        private async Task<string> GetTokenAsync()
        {
            var grantType = "client_credentials";
            var clientId = "KQwi4Jbm9CnAbqR7rA7ffhMq4ADFcqIi";
            // No this is not technically safe but we're not actually doing anything here so let's do it
            var clientSecret = "odtVDhc8Nt9Nt8uvdItdb5B2lI9Fpcqz0xbvfUQvVaqnz192b9SVAozwHG__ysZy";
            var audience = "https://dev-uai25tdjqul077vl.us.auth0.com/api/v2/";

            var bearerToken = await _auth0Api.GetAuthToken(grantType, clientId, clientSecret, audience);

            return bearerToken.AccessToken;
        }
    }
}