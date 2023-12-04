# User

## Unlock Premium

To unlock the premium features of the application, you need to send a `POST` request to the endpoint

```http
POST /unlock-premium/
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

## subscribe

To subscribe to a tutor, you need to send a `POST` request to the endpoint

```http
POST /subscribe/<int:to_sub_user_id>
```

The request needs to contain the following headers:

```json
{
    "User-id": <own_user_id>,
}
```

If the request is successful, the response will return a `200` status code along with the following message:

```json
{
    'message': 'Successfully subscribed'
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
    "error": "Already following this user"
}
``` 

## unsubscribe

To unsubscribe to a tutor, you need to send a `POST` request to the endpoint

```http
POST /subscribe/<int:to_unsub_user_id>
```

The request needs to contain the following headers:

```json
{
    "User-id": <own_user_id>,
}
```

If the request is successful, the response will return a `200` status code along with the following message:

```json
{
    'message': 'Successfully unsubscribed'
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
    "error": "Not currently subscribed to this user"
}
``` 

## List Subscription

To simply list all tutors subscription, you just need to send a `GET` request to the endpoint:

```http
GET /get_subscriptions
```
The request needs to contain the following headers:

```json
{
    "User-id": <own_user_id>,
}
```

Your response will look like something similar to this:

```json
{
    "next": null,
    "previous": null,
    "current_page": 1,
    "total_pages": 1,
    "total_elements": 1,
    "this_page_elements": 1,
    "results": [
        {
            "id": 1,
            "sub": "058feb08-7baf-4a6c-8428-26544018ww9f",
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@ua.pt",
            "premium": true,
            "karma_score": 0,
            "description": "I'm a student at the University of Aveiro.",
            "tutoring_services": true,
            "profile_picture": "https://noteally.s3.eu-west-3.amazonaws.com/john.jpg",
            "study_areas": [
                {
                    "id": 1,
                    "name": "Computer Science"
                }
            ]
        }
        {
            ...
        }
    ]
}
```