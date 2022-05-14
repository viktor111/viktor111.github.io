## The problem

Though  `HttpClient` implements IDisposable, declaring and instantiating it within a using statement is not preferred because when the `HttpClient` object gets disposed of, the underlying socket is not immediately released, which can lead to a socket exhaustion problem. Your first thought might be to have a single instance of `HttpClient` and it is a correct approach however there is another problem that will arrise with this approach. The HttpClient wont respond correctly to DNS changes. This happens because `ConnectionLeaseTimeout` is set to -1, infinite because its singleton. It'll only close on dispose of the client which won't happen if you hvae single instance.

## The solution
There are multiple ways of solving this but in this post im going to provide probably the best way for web apps. Which is creating a service so we can let the dependancy injection and asp manage the state.

## The service 

```csharp
public class UsersHttpService : IUsersHttpService
    {
        private readonly HttpClient _httpClient;
        private readonly UsersOptions _usersOptions;

        public UsersHttpService(HttpClient httpClient, IOptions<UsersOptions> usersOptions)
        {            
            _httpClient = httpClient;
            _usersOptions = usersOptions.Value;

            _httpClient.BaseAddress = new Uri(_usersOptions.LocalhostBaseUrl);

            _httpClient.DefaultRequestHeaders.Add(HeaderNames.Accept, "application/json");
        }

        public async Task<HttpResponseMessage> PostAuthenticateUser(StringContent userContent)
        => await _httpClient.PostAsync(_usersOptions.AutheticatePath, userContent);

        public async Task<HttpResponseMessage> PostRegisterUser(StringContent userContent)
        => await _httpClient.PostAsync(_usersOptions.RegisterPath, userContent);
    }
```
The `UsersOptions` is simply providing the strings needed for the url and paths so don't wory about that.

## Register the service

```csharp
services.AddHttpClient<IUsersHttpService, UsersHttpService>();
```