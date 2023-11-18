# Rating

In order to allow users to rate the materials posted on the site, a rating system is implemented. The rating system is based on likes and dislikes.

## Like

In order to a user like a material, a `POST` request must be sent to the `/like/<material-id>` endpoint. To identify the user, in addition to the `Authorization` header, the `User-id` header must be sent with the request. The `User-id` header must contain the user's id.

After the request is sent, if the user has not liked the material before, the material's rating will be increased by one. For each like, the owner of the material will receive +3 karma points.

If the user wants to remove his like, a `DELETE` request must be sent to the `/like/<material-id>` endpoint, using the same headers as before. After the request is sent, if the user has liked the material before, the material's rating will be decreased by one, and the +3 karma points will be removed from the owner of the material.

## Dislike

Following the same logic, if a user wants to dislike a material, a `POST` request must be sent to the `/dislike/<material-id>` endpoint, passing the same headers as before. Regarding the karma points, for the case of dislikes, the karma score of the owner is not affected.

To remove a dislike, a `DELETE` request must be sent to the `/dislike/<material-id>` endpoint.