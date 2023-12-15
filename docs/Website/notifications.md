# Notifications

### Follow the tutor to be notified when they post a resource

Our user Matias Ferreira wants to follow Isabel Silva and receive notifications whenever she uploads a new resource.

![](/website/notifications/follow.png)

### Warning to confirm the subscription in the e-mail 

![](/website/notifications/confirm.png)

### Confirming subscription to the user to follow

The user Isabel Silva is associated with the AWS SNS topic with the name "uploads-user-4". 

![](/website/notifications/confirmemail.png)

### Confirming subscription to the user to follow topic

This step is necessary so that the subscriber "Matias Ferreira" can have access to the user to follow topic-arn and receive the notifications from Isabel Silva.

![](/website/notifications/awstopic.png)

### Each user is associated with a topic  

![](/website/notifications/topics.png)

### The user to follow publishes a new resource 

Isabel Silva publishes a new resource. 

![](/website/notifications/upload.png)

### All the subscribers will receive an email notification

Success! All of the people that are subscribed to Isabel topic including Matias will receive an email notification.

![](/website/notifications/notification.png)

