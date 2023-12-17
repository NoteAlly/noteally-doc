# Study Areas and Universities

The endpoint `/info` lists all the study areas and universities that are available in the system. The HTTP method `GET` is used to list the study areas and universities.

```http
GET /info
```

The response should be similar to this:

```json
{
    "universities": [
        {
            "value": 1,
            "name": "University of Aveiro"
        },
        {
            "value": 2,
            "name": "University of Porto"
        }
    ],
    "study_areas": [
        {
            "value": 1,
            "name": "Computer Science"
        },
        {
            "value": 2,
            "name": "Mathematics"
        },
        {
            "value": 3,
            "name": "Physics"
        },
        {
            "value": 4,
            "name": "Chemistry"
        },
        {
            "value": 5,
            "name": "Biology"
        }
    ]
}
```

:::tip Tip

This can be particularly useful when you want to create a form to upload a material, for example.

:::
