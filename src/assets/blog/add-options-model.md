## Appsettings

In `appsettings.json` add a key with a value as an object. In this case we have some data about user service.

    "UsersOptions": {
        "LocalhostBaseUrl": "https://localhost:7282/",
        "RegisterPath": "/api/Users/Register",
        "AutheticatePath": "/api/Users/Authenticate"
      }

## The model

Create a c# class named appropriately to the data you are reciveing. 

```csharp
public class UsersOptions
    {
        public const string Position = "UsersOptions";

        public string LocalhostBaseUrl { get; set; } = string.Empty;

        public string RegisterPath { get; set; } = string.Empty;

        public string AutheticatePath { get; set; } = string.Empty;
    }
```
In our case we name it `UsersOptions`. Position indicates the name of the object in `appsettings.json` in our case its UsersOptions. The rest of the properties represent the properties in the object to be mapped to.

## Register the class

```csharp
services.Configure<UsersOptions>(
                configuration.GetSection(UsersOptions.Position));
```

## Usage

```csharp
var host = usersOptions.Value.LocalhostBaseUrl;
var registerPath = usersOptions.Value.RegisterPath;
var loginPath = usersOptions.Value.AutheticatePath;
```
We simple call the class but with .Value in order to get the values for the properties.

If you want to inject it another class you need to use the `IOptions` interface.

Example using it in a service to send Http requests.
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