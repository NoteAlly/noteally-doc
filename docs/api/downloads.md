# Downloads

## Download a material

All users can download the materials published by other users. To download a material, you need to send a `GET` request to the endpoint

```http
GET /materials/downloads/{id}
```

where `{id}` is the id of the material you want to download.

However, in order to determine if this user can have access to this material, the system needs to know the user's id. This is done by sending the user's id in the header of the request using the key `User-id`.

After the request is sent, the system will respond with the information necessary to download the material. The provided link will be valid for 1 minute, after which it will expire.

```json
{
    "name": "my_notes.pdf",
    "link": "https://.../19fe32a9-93b0-403f-a5cf-360ded4857f3.pdf"
}
```


:::tip Note

The original file name is sent in the response so that the user can download the file with the same name as the original.

:::


## List of downloads

To list all the downloads of a user, you need to send a `GET` request to the endpoint

```http
GET /materials/downloads
```

Similar to the previous endpoint, the user's id needs to be sent in the header of the request using the key `User-id`.

The response will look like something similar to this:

```json
[
    {
        "id": 1,
        "name": "Introduction to Programming",
        "description": "Introduction to Programming",
        "price": 0.0,
        "upload_date": "2023-10-20T13:18:26.068535Z",
        "file_name": "introduction_to_programming.pdf",
        "file_size": 1234,
        "total_likes": 0,
        "total_dislikes": 0,
        "total_downloads": 1,
        "user": {
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
                1
            ]
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