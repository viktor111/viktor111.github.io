# File with heading

`weqweqw`

```c#
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
```
`## Markdown __rulez__!
---

### Syntax highlight

```typescript
const language = 'typescript';
```

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote

> Blockquote to the max`