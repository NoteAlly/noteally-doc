# Materials

A material is a resource that users can upload and share with each other. A material can be a file, a link, or a text entry.

The endpoint `/materials` is used to create, list, and delete materials, using the HTTP methods `POST`, `GET`, and `DELETE` respectively.

## Create a material

To create a material, you need to send a `POST` request to the endpoint `/materials` with the following body, as exampled below:

```json
POST /materials

{
    "user": 1,
    "name": "Introduction to Programming",
    "description": "Introduction to Programming",
    "price": 0,
    "university": 1,
    "file": *File,
    "study_areas": [1, 2]

}

*File is a file object, which can be something like an image, pdf, text file, etc. not a string.
```

The response will look like something similar to this:

```json
{
    "Success": "Successfully Created",
    "created_id": 1
}
```

If the material was successfully created, or like this:

```json
{
    "error": "Error Message"
}
```

If the material was not successfully created.

## List materials

To simply list all available materials, you just need to send a `GET` request to the endpoint `/materials` as illustrated below:

```http
GET /materials
```

Your response will look like something similar to this:

```json
{
    "next": null,
    "previous": null,
    "current_page": 1,
    "total_pages": 1,
    "total_elements": 2,
    "this_page_elements": 2,
    "results": [
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
            "total_downloads": 0,
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
}
```

### Pagination

The first six attributes are related to pagination, and their meaning is as follows:

- `next`: the URL of the next page of results. If there is no next page, this attribute is `null`;
- `previous`: the URL of the previous page of results. If there is no previous page, this attribute is `null`;
- `current_page`: the number of the current page;
- `total_pages`: the total number of pages;
- `total_elements`: the total number of materials in the database;
- `this_page_elements`: the number of materials in the current page.

:::tip Note

By default the API returns 10 materials per page. If you want to change this, you can do so by using the `page_size` query parameter. For example, if you want to list 20 materials per page, you can do so by sending a `GET` request to the endpoint `/materials?page_size=20`.

If you want to navigate to page number 5, for example, you can do so by sending a `GET` request to the endpoint `/materials?p=5`:

:::

### Filtering

If you desire to filter the materials, you can do so by using the following query parameters:

| Parameter    | Description |
| -------- | ------- |
| `name`  | Filter for materials that contain `name` in their name. |
| `author` | Filter for materials that were uploaded by `author`. |
| `study_area` | Filter for materials that belong to the study area with `study_area` as its ID. |
| `university` | Filter for materials that belong to the university with `university` as its ID. |
| `min_likes` | Filter for materials that have at least `min_likes` likes. |
| `min_downloads` | Filter for materials that have at least `min_downloads` downloads. |
| `free` | If `true`, filter for materials that are free. If `false`, filter for materials that are paid. |
| `max_price` | Filter for materials that have a price lower than or equal to `max_price`. |

Here is an example of a request that filters for materials that belong to the study area with ID 1 and that have at least 10 likes:

```http
GET /materials?study_area=1&min_likes=10
```

### Ordering

If you desire to order the materials, you can do so by using the `order_by` query parameter. The `order_by` query parameter can take the following values:

- `name`: orders the materials by name;
- `-name`: orders the materials by name in reverse order;
- `price`: orders the materials by price from lowest to highest;
- `-price`: orders the materials by price from highest to lowest;
- `total_downloads`: orders the materials by total downloads from lowest to highest;
- `-total_downloads`: orders the materials by total downloads from highest to lowest;
- `total_likes`: orders the materials by total likes from lowest to highest;
- `-total_likes`: orders the materials by total likes from highest to lowest;
- `upload_date`: orders the materials by upload date from oldest to newest;
- `-upload_date`: orders the materials by upload date from newest to oldest.

For instance, if you want to order the materials by price from highest to lowest, you can do the following:

```http
GET /materials?order_by=-price
```

## Get a material

To get a material, you need to send a `GET` request to the endpoint `/materials/{id}`, where `{id}` is the ID of the material you want to get. For example, if you want to get the material with ID 1, you can do so by sending a `GET` request to the endpoint `/materials/1`:

```http
GET /materials/1
```

The response will look like something similar to this:

```json
{
    "id": 1,
    "upload_date": "21/10/2023 22:41:57",
    "name": "Introduction to Programming",
    "description": "Introduction to Programming",
    "price": 0.0,
    "file_name": "introduction_to_programming.pdf",
    "file_size": 1234,
    "total_likes": 0,
    "total_dislikes": 0,
    "total_downloads": 0,
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
            {
                "id": 1,
                "name": "Computer Science"
            }
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
}
```

If the material was not found, the response will be:

```json
{
    "error": "Material does not exist"
}
```

If the material does not exist.
