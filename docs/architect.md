---
sidebar_position: 2
---

# Architecture

![Architecture](/img/aws-network-architecture.png)

## Microservices Architecture

### End-user

NoteAlly is composed of two main and independent services, a user-friendly Web UI (frontend) built with Svelte, and a RESTful API to provide data and services to the Web UI.

### Admin

For the admin, there are two main services. The first services is metrics monitoring, the observability and monitoring metrics will be provided by Prometheus and Grafana will be used to visualize this metrics. For logs monitoring, we will use Elasticsearch for logging and kibana as a visual tool for these logs.

### AWS Integration

Our services are integrated within the AWS cloud environment in Amazon EC2 instances. This provide security and resizable computing capacity in the cloud. Additionally, Docker containers are used to isolate and manage the services.

## API Gateway

To manage how our different services interact, we use the AWS API Gateway. It serves as a single point of entry for various APIs and services, making it easy for applications to access data, business logic, or other functionalities they need.

## Storage

In our solution, Amazon RDS (Relational Database Service) will house all structured data that feeds the NoteAlly frontend. Meanwhile, to store the study resources and notes, which may include videos, PDFs, and other file formats, we've opted for Amazon S3, which offers multimedia storage.

## Authentication and Authorization

To authenticate users in our platform, we will AWS identity provider service, Amazon Cognito. This service facilitates password storage, verification, salting and resets. For authorization, OAuth will be used to grant and manage secure access to specific resources and APIs within our platform.

## Network

Our network consists of one VPC with one public subnet and two private subnet, one internet gateway to allow resources inside the public subnet to be publicly accessible, one NAT gateway to allow resources inside the private subnet to start outbound connections to the internet, and two route tables to define the routes for the subnets (private subnets share the same Route Table). We also have an API Gateway to expose the API to the internet that is used to define the API endpoints, and the resources that are available on each endpoint defining the authentication and authorization methods for the API. This way we can keep our API private, and only allow authorized users to access it. The VPC Link makes sure that the only connection point to the network is the API Gateway, and that the API Gateway can access the resources inside the VPC.

### VPC

- The Virtual Private Cloud (VPC) serves as the isolated network environment for the AWS resources.

### Subnets

- Subnets are logical divisions of the VPC. They are used to isolate resources within the VPC.

#### Public Subnets

- Public subnets are subnets that have a route to the internet gateway. They are used for resources that need to be publicly accessible. The resources inside the public subnet can be accessed from the internet, or start outbound connections to the internet.

#### Private Subnets

- Private subnets are subnets that do not have a route to the internet gateway. They are used for resources that do not need to be publicly accessible. The resources inside the private subnet can only be accessed from the resources inside the VPC. They cannot be accessed directly from the internet, they can only start outbound connections to the internet due to the usage of NAT gateways.

### Internet Gateway

- Internet gateways are used to allow resources inside the public subnet to be publicly accessible.

### NAT Gateway

- NAT gateways are used to allow resources inside the private subnet to start outbound connections to the internet. They are used to allow resources inside the private subnet to download packages from the internet, such as updates, or to access other resources outside the VPC.

### Route Tables

- Route tables are used to define the routes for the subnets. They are used to define the routes to the internet gateway, NAT gateway, and other resources inside the VPC.

### Network Load Balancer

- Network Load Balancer is used to distribute the load between the instances of the API. It is used to make sure that the API is always available, and to make sure that the API can handle the load.

### VPC Link

- VPC Link is used to connect the API Gateway to the VPC. It is used to allow the API Gateway to access the resources inside the VPC and to define that the vpc is only accessible it.

### Security Groups

- Security groups are used to define the inbound and outbound rules for the resources. They are used to define which ports are open, and which ports are closed. They are also used to define which resources can access the resources, and which resources cannot access the resources.
