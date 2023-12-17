# Tutors

Tutors are users that post content.

The endpoint `/tutors` is used to list tutors, using the HTTP method `GET`.

## List Tutors

To simply list all available tutors, you just need to send a `GET` request to the endpoint `/tutors` as illustrated below:

```http
GET /tutors
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

### Pagination

The first six attributes are related to pagination, and their meaning is as follows:

- `next`: the URL of the next page of results. If there is no next page, this attribute is `null`;
- `previous`: the URL of the previous page of results. If there is no previous page, this attribute is `null`;
- `current_page`: the number of the current page;
- `total_pages`: the total number of pages;
- `total_elements`: the total number of tutors in the database;
- `this_page_elements`: the number of tutors in the current page.

:::tip Note

By default the API returns 10 tutors per page. If you want to change this, you can do so by using the `page_size` query parameter. For example, if you want to list 20 tutors per page, you can do so by sending a `GET` request to the endpoint `/tutors?page_size=20`.

If you want to navigate to page number 5, for example, you can do so by sending a `GET` request to the endpoint `/tutors?p=5`:

:::

### Filtering

If you desire to filter the tutors, you can do so by using the following query parameters:

| Parameter    | Description |
| -------- | ------- |
| `name`  | Filter for tutors that contain `name` in their name. |
| `author` | Filter for tutors that were uploaded by `author`. |
| `study_area` | Filter for tutors that belong to the study area with `study_area` as its ID. |
| `karma_score` | Filter for tutors that have at least `min_likes` likes. |

Here is an example of a request that filters for tutors that belong to the study area with ID 1 and that have at least 10 likes:

```http
GET /tutors?study_area=1
```

### Ordering

If you desire to order the tutors, you can do so by using the `order_by` query parameter. The `order_by` query parameter can take the following values:

- `name`: orders the tutors by name;
- `-name`: orders the tutors by name in reverse order;
- `karma_score`: orders the tutors by price from lowest to highest;
- `-karma_score`: orders the tutors by price from highest to lowest;

For instance, if you want to order the tutors by price from highest to lowest, you can do the following:

```http
GET /tutors?order_by=karma_score
```

## Get a tutor

To get a tutor, you need to send a `GET` request to the endpoint `/tutors/{id}`, where `{id}` is the ID of the tutor you want to get. For example, if you want to get the tutor with ID 1, you can do so by sending a `GET` request to the endpoint `/tutors/1`:

```http
GET /tutors/1
```

The response will look like something similar to this:

```json
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
```

If the tutor was not found, the response will be:

```json
{
    "error": "Tutor does not exist"
}
```

If the tutor does not exist.

## Subscribe

To subscribe to a tutor, you need to send a `POST` request to the endpoint

```http
POST /users/subscribe/<int:to_sub_user_id>
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

### Notifications

Whenever a user follows another, the user will start receiving notifications on any resource published by the user to follow. This is possible with the use of Amazon SNS.

#### Each user is associated with a topic created dynamically using the boto3 client

![Topics](/website/notifications/topics.png)

#### Whenever the user to follow publishes a resource, the subscriber to its topic will receive a notification

![Notification](/website/notifications/notification.png)

## Unsubscribe

To unsubscribe to a tutor, you need to send a `POST` request to the endpoint

```http
POST /users/subscribe/<int:to_unsub_user_id>
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
GET /users/get_subscriptions
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
