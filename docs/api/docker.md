# Docker

Our API is deployed using Docker. For instantiating the API we use several docker images, for each service, that are built and pushed to our ECR repository when a new commit is pushed to the `main` branch. The images are then pulled from the repository and instantiated in the ECS cluster.

The following documentation is a guide on how to run the API locally using the Docker images that are published in our GitHub repository, which are also created each time a commit is pushed to the `main` branch. We will explain how to run the image of the Info Service, but the same steps can be followed for the other services to have the full API running locally.

## Installing Docker

To follow the instructions in this document, you need to have Docker installed on your machine. To install Docker, follow the instructions in the [official documentation](https://docs.docker.com/get-docker/).

If on Ubuntu you can run the following commands:

```bash
sudo apt-get update
sudo apt-get install docker.io
sudo systemctl start docker
sudo systemctl enable docker
# To run docker without sudo
sudo usermod -aG docker <computer-name>
```

## Getting Docker Image

The Docker image of the project API and the implementation files can be found at the github repository [docker-images](https://github.com/NoteAlly/noteally-backend). The image is automatically built and pushed to the repository when a new commit is pushed to the `main` branch.

There are two ways of getting the image:

1. Pulling the image from the repository:

    ```bash
    docker pull ghcr.io/noteally/noteally-backend/info-service:main
    ```

2. Getting the Dockerfile from the repository and building the image from it:

```bash
wget https://raw.githubusercontent.com/NoteAlly/noteally-backend/main/info-service/Dockerfile
docker build -t info-service .
```

After building or pulling the image, it should look something like this:

```bash
$ docker images
REPOSITORY                                              TAG       IMAGE ID       CREATED         SIZE
ghcr.io/noteally/noteally-backend/info-service          main      6e4c28970ef6   19 hours ago   1.11GB
```

**Note:** The image name (*REPOSITORY*) might be different depending on the strategy used.

or if using docker desktop:

![docker-desktop-build](/img/docker-desktop-build.png)

## Running the Docker Image

To run the image, you need to use the command `docker run` and pass the environment variables needed as arguments. This can be done by passing the arguments directly to the command or by using a `.env` file, like the following:

1. Passing the arguments directly to the command:

    ```bash
    docker run -d -p 8000:8000 --name noteally-backend_app \
                                -e DJANGO_KEY=<DJANGO_KEY> \
                                -e AWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY_ID> \
                                -e AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY> \
                                -e AWS_ACCOUNT_ID=<AWS_ACCOUNT_ID>
                                -e AWS_REGION_NAME=<AWS_REGION_NAME> \
                                -e AWS_S3_BUCKET_NAME=<AWS_S3_BUCKET_NAME> \
                                -e AWS_COGNITO_DOMAIN=<AWS_COGNITO_DOMAIN> \
                                -e DB_NAME=<DB_NAME> \
                                -e DB_USERNAME=<DB_USERNAME> \
                                -e DB_PASSWORD=<DB_PASSWORD> \
                                -e DB_PORT=<DB_PORT> \
                                -e DB_HOST=<DB_HOST> \
                                ghcr.io/noteally/noteally-backend/info-service:main
    ```

    **Note:** Replace the environment variables (*values between `<` and `>`*) with the values you want to use.

2. Using a `.env` file:

```bash
docker run -d -p 8000:8000 --name info-service_app --env-file .env ghcr.io/noteally/noteally-backend/info-service:main
```

The environment variables needed are the ones described in the [1st option](#running-the-docker-image).

After running the image, you should be able to see it running:

```bash
$ docker ps
CONTAINER ID   IMAGE                                                    COMMAND                  CREATED          STATUS          PORTS                     NAMES
1a2b3c4d5e6f   ghcr.io/noteally/noteally-backend/info-service:main      "/bin/sh -c 'echo \"D…"  2 minutes ago    Up 2 minutes    0.0.0.0:8000->8000/tcp    info-service_app
```

or if using docker desktop:

![docker-desktop-run](/img/docker-desktop-run.png)

If everything went well, you should be able to access the API at `http://localhost:8000/`.

## Removing the Docker Image

### Stopping the Container

To stop the container, you need to use the command `docker stop` and pass the container name or id as argument as follows:

```bash
docker stop info-service_app
```

### Removing the Container

To remove the container, you need to use the command `docker rm` and pass the container name or id as argument as follows:

```bash
docker rm info-service_app
```

### Removing the Image

To remove the image, you need to use the command `docker rmi` and pass the image name or id as argument as follows:

```bash
docker rmi ghcr.io/noteally/noteally-backend/info-service:main
```

## Running the Docker Image with development settings

The previous image is built with production settings.
If you want to run the image with development settings, you need clone the repository and change the Dockerfile to use the development settings file instead of the production settings file by changing the CMD line to use --settings=NoteAlly.development_settings instead of --settings=NoteAlly.production_settings and then build the image using the following command:

```bash
docker build -t info-service .
```

After building the image, you can run it using the same commands as before.
