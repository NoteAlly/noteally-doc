# User

## Unlock Premium

To unlock the premium features of the application, you need to send a `POST` request to the endpoint

```http
POST /users/unlock-premium/
```

The request needs to contain the following headers:

```json
{
    "User-id": <user_id>,
    "Authorization": "Bearer <id_token>"
}
```

where `<id_token>` is the token provided by AWS Cognito after a successful login or registration.

If the request is successful, the response will return a `200` status code along with the following message:

```json
{
    "user_id": <user_id>,
    "message": "Premium unlocked"
}
```

If the request is not successful, there will be an error message with status code `400`. The error message will be one of the following:

```json
{
    "error": "User not found"
}
```

```json
{
    "error": "User-id header not found"
}
```

```json
{
    "error": "User is already premium"
}
```

There can still appear another error message, that is when the user uses a method that is not `POST`. In this case, the response will return a `405` status code along with the following message:

```json
{
    "detail": ErrorDetail(string='Method "GET" not allowed.', code='method_not_allowed')
}
```
