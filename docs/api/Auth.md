# Auth

In order to use most of the resources provided by the API, you need to be authenticated. To do so, you need to register an account and then login.

To facilitate and simplify the authentication process, the API is secured using AWS Cognito. This means that the API does not store any user credentials, and the authentication is entirely handled by AWS.


## Login and Register

To login or register, you just need to send a `POST` request to the following endpoint.

```http
POST /auth/login
```

You need to pass as multipart form data the following fields:

```json
{
    "id_token": "...",
    "access_token": "..."
}
```

where `id_token` and `access_token` are the tokens provided by AWS Cognito after a successful login or registration.

Internally, the API will use the `access_token` to get the user's general information from AWS Cognito. If the user does not exist in the database, it will be created.

After a successful login or registration, the API will return a `200` status code along with the following response:

```json
{
    "id": 1,
    "sub": "<cognito-sub>",
    "id_token": "...",
    "first_name": "<first-name>",
    "last_name": "<last-name>",
    "email": "<email>",
    "premium": false,
    "karma_score": 0,
    "tutoring_services": false,
    "profile_picture": null,
    "registered": "False if the user was just registered, True otherwise"
}
```


:::tip Note

This information is useful to use as session data in the frontend.

:::


## Accessing private resources

To access protected resources, you need to send the `access_token` as a Bearer token in the header of the request using the key `Authorization`. The invoked service will then use the token to get the user's information from AWS Cognito and check if he is authorized to access the resource.
