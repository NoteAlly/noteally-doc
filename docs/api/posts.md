# User posts

Users that have published at least one post have the possibility to see their posts in their profile page, as well as the possibility to delete them.

## Get user posts

In order to get the posts of a user, a `GET` request must be sent to the `/posts` endpoint. In addition to the `Authorization` header, the `User-id` header must be sent with the request. The `User-id` header must contain the user's id.

```http
GET /posts
```

After performing the get request to this endpoint, the response follows the following format:

```json
[
    {
        "id": 6,
        "name": "Agile methodology",
        "description": "Agile methodology",
        "price": 3.0,
        "upload_date": "2023-11-06T00:33:13.971709Z",
        "file_name": "Week-2.2-9PillarsOfMicroservices.pdf",
        "file_size": 347265,
        "total_likes": 1,
        "total_dislikes": 2,
        "total_downloads": 4,
        "user": {
            "id": 4,
            "sub": "7fe88be8-63dd-44a1-baec-6b8bd80e9ae1",
            "first_name": "Pedro",
            "last_name": "Rodrigues",
            "email": "pedrofrodrigues4@gmail.com",
            "premium": false,
            "karma_score": 14,
            "description": "",
            "tutoring_services": false,
            "profile_picture_name": "",
            "profile_pic_size": 0,
            "profile_picture": null,
            "study_areas": []
        },
        "university": {
            "id": 1,
            "name": "University of Aveiro"
        },
        "study_areas": [
            {
                "id": 1,
                "name": "Computer Science"
            }
        ]
    },
    {
        ...
    }
]
```

## Delete a post

In order to delete a post, a `DELETE` request must be sent to the `/posts/{id}` endpoint.

```http
DELETE /posts/{id}
```
