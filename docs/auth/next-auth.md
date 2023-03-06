# NextAuth

## Documentation

[https://next-auth.js.org/](https://next-auth.js.org/)

## Configuration

In order to authenticate NextAi with NextAuth, simply pass 'NextAuth' as an option in the NextAi function

```
import NextAi from 'nextai';

export default NextAi({
   ...
    Auth: 'NextAuth'
})
```

This will hit the `/api/auth/session route` and if a user is returned, the rest of the function can run, otherwise will return a `401` http code