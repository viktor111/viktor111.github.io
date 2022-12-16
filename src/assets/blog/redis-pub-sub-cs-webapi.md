
# Redis with pub/sub  with C# Web API.

We are going to take a look at how to implement pub sub built in feature of redis with C# Web API. Since most examples on the web invlolve a console app. I am going to show you how you can implement it. 

We will build a simple notifier that a user has changed his email. So we may want to refelct that in a cached data or send a notification to the client. 

Important to know is that the redis pub/sub does not hold messages like a queue would. I find great usage in using to have changes refelcted on the cahce layer because its very simple and allow for fire and forget. 

## Step 1 - Install the Nuget packeges 

`StackExchange.Redis.Extensions.AspNetCore`

`StackExchange.Redis.Extensions.Core`

`StackExchange.Redis.Extensions.Newtonsoft`


## Step 2 - Create the connection

Fill with your data and add to appsettings.

``` json
"RedisConfig": {
    "Password": "",
    "AllowAdmin": false,
    "Ssl": false,
    "ConnectTimeout": 100,
    "ConnectRetry": 4,
    "Hosts": [
      {
        "Host": "localhost",
        "Port": "6379"
      }
    ],
    "Database": 0
  }
```

Next add this to the service collection to specify the connection and that we want to use Newtonsoft for serialization and deserialization of data.

``` c#
services.AddStackExchangeRedisExtensions<NewtonsoftSerializer>(
                configuration.GetSection("RedisConfig").Get<RedisConfiguration>());
```

## Step 3 - Create the subscriber

We are going to create a subscriber for a change of the email on the user. So when the user changes the email it will publish a message on the channel and it will be the sbscriber will be notified.

Interface
```
public interface IEmailSubscirber
    {
        public Task Subscribe();
    }
```

Class

```
public class EmailSubscriber : IEmailSubscirber
    {
        private readonly IRedisClient _redisClient;

        public EmailSubscriber(IRedisClient redisClient)
        {
            _redisClient = redisClient;
        }

        public async Task Subscribe()
        {
            await _redisClient.GetDefaultDatabase()
                .SubscribeAsync(new RedisChannel(ApplicationConstants.REDIS_UP_EMAIL, RedisChannel.PatternMode.Auto), async (UpdateEmailRedisDto updateEmailRedisDto) =>
            {
                // Update user email
            });
        }
    }
```

## Step 4 - Usage in Program.cs

We need to use this class somehow because it will not be just triggered. The reason is that the server is running and does not know about this class untill we tell it to know about it. We do this by calling the sbscribe method in Program.cs. This allows the sbscriber to listen for notifications on the channel as long as the server is running.

```
var app = builder.Build();

var serviceCollection = app.Services;

if (app.Environment.IsDevelopment())
{
    app.PrepareDataBase();
}

var emailUpdateSubscriber = serviceCollection.GetRequiredService<IEmailSubscirber>();

if (emailUpdateSubscriber is not null)
{
    await emailUpdateSubscriber.Subscribe();
}

app.Run();
```

## Final setp - Publish the message from another service or whatever application.


``` c#
await _redisClient.GetDefaultDatabase().PublishAsync(
                new RedisChannel(ApplicationConstants.REDIS_UP_EMAIL, RedisChannel.PatternMode.Auto),
                new UpdateEmailRedisDto { Key = $"{ApplicationConstants.REDIS_MyFeedPrefix}:{userId}", Email = request.New });
```

If you are wondering what the is the `_redisClient` just require it in the DPI with the `IRedisClient` interface.






