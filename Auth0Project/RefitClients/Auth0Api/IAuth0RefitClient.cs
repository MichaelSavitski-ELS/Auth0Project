using Refit;

namespace Auth0Project.RefitClients
{
    public interface IAuth0RefitClient
    {
        Task Login(string userName, string password);
    }
}