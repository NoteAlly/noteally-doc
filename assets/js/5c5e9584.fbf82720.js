"use strict";(self.webpackChunknotally_doc=self.webpackChunknotally_doc||[]).push([[91],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Tutors",s={unversionedId:"api/tutors",id:"api/tutors",title:"Tutors",description:"Tutors are users that post content.",source:"@site/docs/api/tutors.md",sourceDirName:"api",slug:"/api/tutors",permalink:"/noteally-doc/docs/api/tutors",draft:!1,editUrl:"https://github.com/NoteAlly/docs/api/tutors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Study Areas and Universities",permalink:"/noteally-doc/docs/api/study_area_unis"},next:{title:"User",permalink:"/noteally-doc/docs/api/user"}},l={},u=[{value:"List Tutors",id:"list-tutors",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Ordering",id:"ordering",level:3},{value:"Get a tutor",id:"get-a-tutor",level:2},{value:"Subscribe",id:"subscribe",level:2},{value:"Notifications",id:"notifications",level:3},{value:"Each user is associated with a topic created dynamically using the boto3 client",id:"each-user-is-associated-with-a-topic-created-dynamically-using-the-boto3-client",level:4},{value:"Whenever the user to follow publishes a resource, the subscriber to its topic will receive a notification",id:"whenever-the-user-to-follow-publishes-a-resource-the-subscriber-to-its-topic-will-receive-a-notification",level:4},{value:"Unsubscribe",id:"unsubscribe",level:2},{value:"List Subscription",id:"list-subscription",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutors"},"Tutors"),(0,r.kt)("p",null,"Tutors are users that post content."),(0,r.kt)("p",null,"The endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/tutors")," is used to list tutors, using the HTTP method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),"."),(0,r.kt)("h2",{id:"list-tutors"},"List Tutors"),(0,r.kt)("p",null,"To simply list all available tutors, you just need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/tutors")," as illustrated below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /tutors\n")),(0,r.kt)("p",null,"Your response will look like something similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "next": null,\n    "previous": null,\n    "current_page": 1,\n    "total_pages": 1,\n    "total_elements": 1,\n    "this_page_elements": 1,\n    "results": [\n        {\n            "id": 1,\n            "sub": "058feb08-7baf-4a6c-8428-26544018ww9f",\n            "first_name": "John",\n            "last_name": "Doe",\n            "email": "john@ua.pt",\n            "premium": true,\n            "karma_score": 0,\n            "description": "I\'m a student at the University of Aveiro.",\n            "tutoring_services": true,\n            "profile_picture": "https://noteally.s3.eu-west-3.amazonaws.com/john.jpg",\n            "study_areas": [\n                {\n                    "id": 1,\n                    "name": "Computer Science"\n                }\n            ]\n        }\n        {\n            ...\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"The first six attributes are related to pagination, and their meaning is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"next"),": the URL of the next page of results. If there is no next page, this attribute is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"previous"),": the URL of the previous page of results. If there is no previous page, this attribute is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current_page"),": the number of the current page;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_pages"),": the total number of pages;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_elements"),": the total number of tutors in the database;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"this_page_elements"),": the number of tutors in the current page.")),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By default the API returns 10 tutors per page. If you want to change this, you can do so by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_size")," query parameter. For example, if you want to list 20 tutors per page, you can do so by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/tutors?page_size=20"),"."),(0,r.kt)("p",{parentName:"admonition"},"If you want to navigate to page number 5, for example, you can do so by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/tutors?p=5"),":")),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"If you desire to filter the tutors, you can do so by using the following query parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for tutors that contain ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," in their name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for tutors that were uploaded by ",(0,r.kt)("inlineCode",{parentName:"td"},"author"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"study_area")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for tutors that belong to the study area with ",(0,r.kt)("inlineCode",{parentName:"td"},"study_area")," as its ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"karma_score")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for tutors that have at least ",(0,r.kt)("inlineCode",{parentName:"td"},"min_likes")," likes.")))),(0,r.kt)("p",null,"Here is an example of a request that filters for tutors that belong to the study area with ID 1 and that have at least 10 likes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /tutors?study_area=1\n")),(0,r.kt)("h3",{id:"ordering"},"Ordering"),(0,r.kt)("p",null,"If you desire to order the tutors, you can do so by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"order_by")," query parameter. The ",(0,r.kt)("inlineCode",{parentName:"p"},"order_by")," query parameter can take the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": orders the tutors by name;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-name"),": orders the tutors by name in reverse order;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"karma_score"),": orders the tutors by price from lowest to highest;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-karma_score"),": orders the tutors by price from highest to lowest;")),(0,r.kt)("p",null,"For instance, if you want to order the tutors by price from highest to lowest, you can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /tutors?order_by=karma_score\n")),(0,r.kt)("h2",{id:"get-a-tutor"},"Get a tutor"),(0,r.kt)("p",null,"To get a tutor, you need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/tutors/{id}"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"{id}")," is the ID of the tutor you want to get. For example, if you want to get the tutor with ID 1, you can do so by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/tutors/1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /tutors/1\n")),(0,r.kt)("p",null,"The response will look like something similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "id": 1,\n    "sub": "058feb08-7baf-4a6c-8428-26544018ww9f",\n    "first_name": "John",\n    "last_name": "Doe",\n    "email": "john@ua.pt",\n    "premium": true,\n    "karma_score": 0,\n    "description": "I\'m a student at the University of Aveiro.",\n    "tutoring_services": true,\n    "profile_picture": "https://noteally.s3.eu-west-3.amazonaws.com/john.jpg",\n    "study_areas": [\n        {\n            "id": 1,\n            "name": "Computer Science"\n        }\n    ] \n}\n')),(0,r.kt)("p",null,"If the tutor was not found, the response will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Tutor does not exist"\n}\n')),(0,r.kt)("p",null,"If the tutor does not exist."),(0,r.kt)("h2",{id:"subscribe"},"Subscribe"),(0,r.kt)("p",null,"To subscribe to a tutor, you need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to the endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"POST /users/subscribe/<int:to_sub_user_id>\n")),(0,r.kt)("p",null,"The request needs to contain the following headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "User-id": <own_user_id>,\n}\n')),(0,r.kt)("p",null,"If the request is successful, the response will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," status code along with the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n    'message': 'Successfully subscribed'\n}\n")),(0,r.kt)("p",null,"If the request is not successful, there will be an error message with status code ",(0,r.kt)("inlineCode",{parentName:"p"},"400"),". The error message will be one of the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "User not found"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Already following this user"\n}\n')),(0,r.kt)("h3",{id:"notifications"},"Notifications"),(0,r.kt)("p",null,"Whenever a user follows another, the user will start receiving notifications on any resource published by the user to follow. This is possible with the use of Amazon SNS."),(0,r.kt)("h4",{id:"each-user-is-associated-with-a-topic-created-dynamically-using-the-boto3-client"},"Each user is associated with a topic created dynamically using the boto3 client"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Topics",src:n(6161).Z,width:"1502",height:"359"})),(0,r.kt)("h4",{id:"whenever-the-user-to-follow-publishes-a-resource-the-subscriber-to-its-topic-will-receive-a-notification"},"Whenever the user to follow publishes a resource, the subscriber to its topic will receive a notification"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Notification",src:n(6130).Z,width:"752",height:"491"})),(0,r.kt)("h2",{id:"unsubscribe"},"Unsubscribe"),(0,r.kt)("p",null,"To unsubscribe to a tutor, you need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to the endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"POST /users/subscribe/<int:to_unsub_user_id>\n")),(0,r.kt)("p",null,"The request needs to contain the following headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "User-id": <own_user_id>,\n}\n')),(0,r.kt)("p",null,"If the request is successful, the response will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," status code along with the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n    'message': 'Successfully unsubscribed'\n}\n")),(0,r.kt)("p",null,"If the request is not successful, there will be an error message with status code ",(0,r.kt)("inlineCode",{parentName:"p"},"400"),". The error message will be one of the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "User not found"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Not currently subscribed to this user"\n}\n')),(0,r.kt)("h2",{id:"list-subscription"},"List Subscription"),(0,r.kt)("p",null,"To simply list all tutors subscription, you just need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /users/get_subscriptions\n")),(0,r.kt)("p",null,"The request needs to contain the following headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "User-id": <own_user_id>,\n}\n')),(0,r.kt)("p",null,"Your response will look like something similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "next": null,\n    "previous": null,\n    "current_page": 1,\n    "total_pages": 1,\n    "total_elements": 1,\n    "this_page_elements": 1,\n    "results": [\n        {\n            "id": 1,\n            "sub": "058feb08-7baf-4a6c-8428-26544018ww9f",\n            "first_name": "John",\n            "last_name": "Doe",\n            "email": "john@ua.pt",\n            "premium": true,\n            "karma_score": 0,\n            "description": "I\'m a student at the University of Aveiro.",\n            "tutoring_services": true,\n            "profile_picture": "https://noteally.s3.eu-west-3.amazonaws.com/john.jpg",\n            "study_areas": [\n                {\n                    "id": 1,\n                    "name": "Computer Science"\n                }\n            ]\n        }\n        {\n            ...\n        }\n    ]\n}\n')))}c.isMDXComponent=!0},6130:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notification-5ef56f4ea8f0894308abd08fe9dc81dc.png"},6161:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/topics-4155d4aa97837ed3b94642b5321ea046.png"}}]);