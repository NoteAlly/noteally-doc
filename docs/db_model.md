---
sidebar_position: 3
---

# DB Model

The database model is composed of the following tables:

- User
- Material
- StudyArea
- University
- Like
- Download

These entities, their relationships, and their attributes are described in the following image:

![DB Model](/img/noteally_db_model.png)

## User

The user entity corresponds to the end-user of the system. A user can simply be someone who wants to download materials, upload materials, or even someone who wants to advertise their tutoring services. A user must subscribe the premium plan to be able to advertise their tutoring services, and cancel the advertising system.

## Material

The material entity is a resource that a user can create and share with other users. It can have several formats, including PDF, ZIP, Link or even plain text. A material can be uploaded by a user, and downloaded by other users. The user can decide weather or not to make his materials paid or free.

## StudyArea

The study area entity is used to categorize materials. A material can belong to one or more study areas. This will help users to find materials that are related to their study area, and will help the system to recommend materials to new users.

## University

The university entity is used to categorize materials. A material can belong to only one. This will help users to find materials that are related to their university, and will help the system to recommend materials to new users.

## Like

The like entity is used to keep track of the number of likes, and dislikes of a material. This will help users to know if a material is useful or not.

## Download

The download entity is used to keep track of the number of downloads of a material.
