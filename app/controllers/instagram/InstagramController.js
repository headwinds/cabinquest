
const CLIENT-ID = "4ebedff60ee8486480bfd3f01ee55943";
const REDIRECT-URI = "https://cabinquest.now.sh/";

// https://www.instagram.com/developer/authentication/

////////////// SERVER SIDE

// 1. CONNECT
// https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code

// 2. receive
// http://your-redirect-uri?code=CODE


// denied
// http://your-redirect-uri?error=access_denied&error_reason=user_denied&error_description=The+user+denied+your+request


// get token
/*
 curl -F 'client_id=CLIENT_ID' \
    -F 'client_secret=CLIENT_SECRET' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=AUTHORIZATION_REDIRECT_URI' \
    -F 'code=CODE' \
    https://api.instagram.com/oauth/access_token

 */

/////////////// CLIENT SIDE

// 1. https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token

// 2. http://your-redirect-uri#access_token=ACCESS-TOKEN
