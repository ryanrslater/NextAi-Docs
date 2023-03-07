# Auth0

## Documentation

[https://auth0.com/docs/quickstart/webapp/nextjs/01-login](https://auth0.com/docs/quickstart/webapp/nextjs/01-login)

## Configuration

In order to authenticate NextAi with Auth0, simply pass 'Auth0' as an option in the NextAi function

```
import NextAi from 'nextai';

export default NextAi({
   ...
    Auth: 'Auth0'
})
```

This will hit the `/api/auth/me route` and if a user is returned, the rest of the function can run, otherwise will return a `401` http code