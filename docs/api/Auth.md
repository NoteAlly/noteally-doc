# Auth



## Register

To create an account, you need to send a `POST` request to the endpoint `/register` with the following body, as exampled below:

```json
POST /register

{
    "name": "Teles",
    "description": "Hello Im Teles",
    "email": "teles@ua.pt",
    "university": 1,
    "tutoring_services": true,
    "password": "secret",
    "id_aws":0

}
 
```

The response will look like something similar to this:

```json
{
    "Success": "Successfully Registered"
}
```

If the account was successfully created, or like this:

```json
{
    "error": "Error Message"
}
```

If the account was not successfully created.


## Login

To Login, you need to send a `POST` request to the endpoint `/login` with the following body, as exampled below:

```json
POST /materials

{
    "email": "teles@ua.pt",
    "password": "secret", 

}
 
```

The response will look like something similar to this:

```json
{
    "Success": "Successfully Logged",
    "created_id": 1
}
```

If the login was successfull, or like this:

```json
{
    "error": "Error Message"
}
```

If the login was not successfull.

 
