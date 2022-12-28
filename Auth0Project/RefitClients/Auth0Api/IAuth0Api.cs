using Refit;

public interface IAuth0Api
{
    [Headers("content-type: application/x-www-form-urlencoded")]
    [Post("/oauth/token")]
    Task<AuthResponse> GetAuthToken(string grantType, string clientId, string clientSecret, string audience);
}