---
sidebar_position: 3
---

# Network

![Docusaurus logo](/img/aws-network-architecture.png)

Our network consists of one VPC with one public subnet and one private subnet, one internet gateway to allow resources inside the public subnet to be publicly accessible, one NAT gateway to allow resources inside the private subnet to start outbound connections to the internet, and two route tables to define the routes for the subnets. We also have an API Gateway to expose the API to the internet that is used to define the API endpoints, and the resources that are available on each endpoint defining the authentication and authorization methods for the API. This way we can keep our API private, and only allow authorized users to access it.
<!-- We also have an ACL to block all traffic from protocols other than HTTP and HTTPS. Since we do not need/want to allow any other traffic. -->

## VPC

- The Virtual Private Cloud (VPC) serves as the isolated network environment for the AWS resources.

## Subnets

- Subnets are logical divisions of the VPC. They are used to isolate resources within the VPC.

### Public Subnets

- Public subnets are subnets that have a route to the internet gateway. They are used for resources that need to be publicly accessible. The resources inside the public subnet can be accessed from the internet, or start outbound connections to the internet.

### Private Subnets

- Private subnets are subnets that do not have a route to the internet gateway. They are used for resources that do not need to be publicly accessible. The resources inside the private subnet can only be accessed from the resources inside the VPC. They cannot be accessed directly from the internet, they can only start outbound connections to the internet due to the usage of NAT gateways.

## Internet Gateway

- Internet gateways are used to allow resources inside the public subnet to be publicly accessible.

## NAT Gateway

- NAT gateways are used to allow resources inside the private subnet to start outbound connections to the internet. They are used to allow resources inside the private subnet to download packages from the internet, such as updates, or to access other resources outside the VPC.

## Route Tables

- Route tables are used to define the routes for the subnets. They are used to define the routes to the internet gateway, NAT gateway, and other resources inside the VPC.

## Network Load Balancer

- Network Load Balancer is used to distribute the load between the instances of the API. It is used to make sure that the API is always available, and to make sure that the API can handle the load.

## VPC Link

- VPC Link is used to connect the API Gateway to the VPC. It is used to allow the API Gateway to access the resources inside the VPC and to define that the vpc is only accessible it.

## Security Groups

- Security groups are used to define the inbound and outbound rules for the resources. They are used to define which ports are open, and which ports are closed. They are also used to define which resources can access the resources, and which resources cannot access the resources.
