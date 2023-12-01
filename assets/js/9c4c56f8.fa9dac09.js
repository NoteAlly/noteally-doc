"use strict";(self.webpackChunknotally_doc=self.webpackChunknotally_doc||[]).push([[970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={},i="Downloads",l={unversionedId:"api/downloads",id:"api/downloads",title:"Downloads",description:"Download a material",source:"@site/docs/api/downloads.md",sourceDirName:"api",slug:"/api/downloads",permalink:"/noteally-doc/docs/api/downloads",draft:!1,editUrl:"https://github.com/NoteAlly/docs/api/downloads.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/noteally-doc/docs/api/docker"},next:{title:"Materials",permalink:"/noteally-doc/docs/api/materials"}},s={},d=[{value:"Download a material",id:"download-a-material",level:2},{value:"List of downloads",id:"list-of-downloads",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"downloads"},"Downloads"),(0,r.kt)("h2",{id:"download-a-material"},"Download a material"),(0,r.kt)("p",null,"All users can download the materials published by other users. To download a material, you need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /downloads/{id}\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"{id}")," is the id of the material you want to download."),(0,r.kt)("p",null,"However, in order to determine if this user can have access to this material, the system needs to know the user's id. This is done by sending the user's id in the header of the request using the key ",(0,r.kt)("inlineCode",{parentName:"p"},"User-id"),"."),(0,r.kt)("p",null,"After the request is sent, the system will respond with the information necessary to download the material."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "my_notes.pdf",\n    "link": ".../19fe32a9-93b0-403f-a5cf-360ded4857f3.pdf"\n}\n')),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The original file name is sent in the response so that the user can download the file with the same name as the original.")),(0,r.kt)("h2",{id:"list-of-downloads"},"List of downloads"),(0,r.kt)("p",null,"To list all the downloads of a user, you need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /downloads\n")),(0,r.kt)("p",null,"Similar to the previous endpoint, the user's id needs to be sent in the header of the request using the key ",(0,r.kt)("inlineCode",{parentName:"p"},"User-id"),"."),(0,r.kt)("p",null,"The response will look like something similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 1,\n        "name": "Introduction to Programming",\n        "description": "Introduction to Programming",\n        "price": 0.0,\n        "upload_date": "2023-10-20T13:18:26.068535Z",\n        "file_name": "introduction_to_programming.pdf",\n        "file_size": 1234,\n        "total_likes": 0,\n        "total_dislikes": 0,\n        "total_downloads": 1,\n        "user": {\n            "id": 1,\n            "sub": "058feb08-7baf-4a6c-8428-26544018ww9f",\n            "first_name": "John",\n            "last_name": "Doe",\n            "email": "john@ua.pt",\n            "premium": true,\n            "karma_score": 0,\n            "description": "I\'m a student at the University of Aveiro.",\n            "tutoring_services": true,\n            "profile_picture": "https://noteally.s3.eu-west-3.amazonaws.com/john.jpg",\n            "study_areas": [\n                1\n            ]\n        },\n        "university": {\n            "id": 1,\n            "name": "University of Aveiro"\n        },\n        "study_areas": [\n            {\n                "id": 1,\n                "name": "Computer Science"\n            }\n        ]\n    },\n    {\n        ...\n    }\n]\n')))}u.isMDXComponent=!0}}]);