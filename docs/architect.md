---
sidebar_position: 2
---

# Architecture

![Docusaurus logo](/img/Architecture.png)

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





