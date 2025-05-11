# ARC3-API

API which serves the ARC bot, ARC-DASH and unity frontentends.

Env file format:
```ini
MONGODB_URI=<mongourl> # Mongodb Database connection string
PORT=3000 # Port that the service should run on, default 3000
HOSTED_URL=<hostedurl> # URL to Where the Frontend is hosted.
TOKEN=<token> # Discord Bot token
DIRECT_URL=<directurl> # Discord provided URL that you click for sign in.
DISCORD_CLIENT_ID=<clientid> # Discord client ID
DISCORD_CLIENT_SECRET=<secret> # Discord client secret
DISCORD_REDIRECT_URI=<redirect> # Redirect link to this service that discord redirects back to after authorization
JWT_SECRET=<jwt> # JWT secret
```

## V1
The V1 api serves the ARC-DASH frontend 

**Location:** `/api/**`

**Auth:** `/auth/**`

### Significant Changes
First version!

## V2
The V2 api serves the unity dashboard

**Location:** `/v2/api/**`

**Auth:** `/v2/auth/**`

### Significant Changes
The V2 api mainly features support for a de-coupled frontend which can be hosted seperately. It also adds new info to fetched discord users such as enhanded permission structures.

