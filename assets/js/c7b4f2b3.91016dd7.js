"use strict";(self.webpackChunknotally_doc=self.webpackChunknotally_doc||[]).push([[325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),k=r,c=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},l="Materials",o={unversionedId:"api/materials",id:"api/materials",title:"Materials",description:"A material is a resource that users can upload and share with each other. A material can be a file, a link, or a text entry.",source:"@site/docs/api/materials.md",sourceDirName:"api",slug:"/api/materials",permalink:"/noteally-doc/docs/api/materials",draft:!1,editUrl:"https://github.com/NoteAlly/docs/api/materials.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Downloads",permalink:"/noteally-doc/docs/api/downloads"},next:{title:"Study Areas and Universities",permalink:"/noteally-doc/docs/api/study_area_unis"}},s={},p=[{value:"Create a material",id:"create-a-material",level:2},{value:"List materials",id:"list-materials",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Ordering",id:"ordering",level:3},{value:"Get a material",id:"get-a-material",level:2},{value:"Update a material",id:"update-a-material",level:2},{value:"Delete a material",id:"delete-a-material",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"materials"},"Materials"),(0,r.kt)("p",null,"A material is a resource that users can upload and share with each other. A material can be a file, a link, or a text entry."),(0,r.kt)("p",null,"The endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/materials")," is used to create, list, update, and delete materials, using the HTTP methods ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," respectively."),(0,r.kt)("h2",{id:"create-a-material"},"Create a material"),(0,r.kt)("p",null,"To create a material, you need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/materials")," with the following body, as exampled below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'POST /materials\n\n{\n    "user": 1,\n    "name": "Introduction to Programming",\n    "description": "Introduction to Programming",\n    "price": 0,\n    "university": 1,\n    "file": *File,\n    "study_areas": [1, 2]\n\n}\n\n*File is a file object, which can be something like an image, pdf, text file, etc. not a string.\n')),(0,r.kt)("p",null,"The response will look like something similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Success": "Successfully Created",\n    "created_id": 1\n}\n')),(0,r.kt)("p",null,"If the material was successfully created, or like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Error Message"\n}\n')),(0,r.kt)("p",null,"If the material was not successfully created."),(0,r.kt)("h2",{id:"list-materials"},"List materials"),(0,r.kt)("p",null,"To simply list all available materials, you just need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/materials")," as illustrated below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /materials\n")),(0,r.kt)("p",null,"Your response will look like something similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "next": null,\n    "previous": null,\n    "current_page": 1,\n    "total_pages": 1,\n    "total_elements": 2,\n    "this_page_elements": 2,\n    "results": [\n        {\n            "id": 1,\n            "name": "Introduction to Programming",\n            "description": "Introduction to Programming",\n            "price": 0.0,\n            "upload_date": "2023-10-20T13:18:26.068535Z",\n            "file_name": "introduction_to_programming.pdf",\n            "file_size": 1234,\n            "total_likes": 0,\n            "total_dislikes": 0,\n            "total_downloads": 0,\n            "user": {\n                "id": 1,\n                "sub": "058feb08-7baf-4a6c-8428-26544018ww9f",\n                "first_name": "John",\n                "last_name": "Doe",\n                "email": "john@ua.pt",\n                "premium": true,\n                "karma_score": 0,\n                "description": "I\'m a student at the University of Aveiro.",\n                "tutoring_services": true,\n                "profile_picture": "https://noteally.s3.eu-west-3.amazonaws.com/john.jpg",\n                "study_areas": [\n                    1\n                ]\n            },\n            "university": {\n                "id": 1,\n                "name": "University of Aveiro"\n            },\n            "study_areas": [\n                {\n                    "id": 1,\n                    "name": "Computer Science"\n                }\n            ]\n        },\n        {\n            ...\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"The first six attributes are related to pagination, and their meaning is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"next"),": the URL of the next page of results. If there is no next page, this attribute is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"previous"),": the URL of the previous page of results. If there is no previous page, this attribute is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current_page"),": the number of the current page;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_pages"),": the total number of pages;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_elements"),": the total number of materials in the database;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"this_page_elements"),": the number of materials in the current page.")),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By default the API returns 10 materials per page. If you want to change this, you can do so by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_size")," query parameter. For example, if you want to list 20 materials per page, you can do so by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/materials?page_size=20"),"."),(0,r.kt)("p",{parentName:"admonition"},"If you want to navigate to page number 5, for example, you can do so by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/materials?p=5"),":")),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"If you desire to filter the materials, you can do so by using the following query parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for materials that contain ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," in their name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for materials that were uploaded by ",(0,r.kt)("inlineCode",{parentName:"td"},"author"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"study_area")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for materials that belong to the study area with ",(0,r.kt)("inlineCode",{parentName:"td"},"study_area")," as its ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"university")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for materials that belong to the university with ",(0,r.kt)("inlineCode",{parentName:"td"},"university")," as its ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"min_likes")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for materials that have at least ",(0,r.kt)("inlineCode",{parentName:"td"},"min_likes")," likes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"min_downloads")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for materials that have at least ",(0,r.kt)("inlineCode",{parentName:"td"},"min_downloads")," downloads.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"free")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", filter for materials that are free. If ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", filter for materials that are paid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_price")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for materials that have a price lower than or equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"max_price"),".")))),(0,r.kt)("p",null,"Here is an example of a request that filters for materials that belong to the study area with ID 1 and that have at least 10 likes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /materials?study_area=1&min_likes=10\n")),(0,r.kt)("h3",{id:"ordering"},"Ordering"),(0,r.kt)("p",null,"If you desire to order the materials, you can do so by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"order_by")," query parameter. The ",(0,r.kt)("inlineCode",{parentName:"p"},"order_by")," query parameter can take the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": orders the materials by name;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-name"),": orders the materials by name in reverse order;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"price"),": orders the materials by price from lowest to highest;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-price"),": orders the materials by price from highest to lowest;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_downloads"),": orders the materials by total downloads from lowest to highest;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-total_downloads"),": orders the materials by total downloads from highest to lowest;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_likes"),": orders the materials by total likes from lowest to highest;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-total_likes"),": orders the materials by total likes from highest to lowest;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upload_date"),": orders the materials by upload date from oldest to newest;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-upload_date"),": orders the materials by upload date from newest to oldest.")),(0,r.kt)("p",null,"For instance, if you want to order the materials by price from highest to lowest, you can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /materials?order_by=-price\n")),(0,r.kt)("h2",{id:"get-a-material"},"Get a material"),(0,r.kt)("p",null,"To get a material, you need to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/materials/{id}"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"{id}")," is the ID of the material you want to get. For example, if you want to get the material with ID 1, you can do so by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/materials/1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /materials/1\n")),(0,r.kt)("p",null,"The response will look like something similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "upload_date": "21/10/2023 22:41:57",\n    "name": "Introduction to Programming",\n    "description": "Introduction to Programming",\n    "price": 0.0,\n    "file_name": "introduction_to_programming.pdf",\n    "file_size": 1234,\n    "total_likes": 0,\n    "total_dislikes": 0,\n    "total_downloads": 0,\n    "user": {\n        "id": 1,\n        "sub": "058feb08-7baf-4a6c-8428-26544018ww9f",\n        "first_name": "John",\n        "last_name": "Doe",\n        "email": "john@ua.pt",\n        "premium": true,\n        "karma_score": 0,\n        "description": "I\'m a student at the University of Aveiro.",\n        "tutoring_services": true,\n        "profile_picture": "https://noteally.s3.eu-west-3.amazonaws.com/john.jpg",\n        "study_areas": [\n            {\n                "id": 1,\n                "name": "Computer Science"\n            }\n        ]\n    },\n    "university": {\n        "id": 1,\n        "name": "University of Aveiro"\n    },\n    "study_areas": [\n        {\n            "id": 1,\n            "name": "Computer Science"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"If the material was not found, the response will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Material does not exist"\n}\n')),(0,r.kt)("p",null,"If the material does not exist."),(0,r.kt)("h2",{id:"update-a-material"},"Update a material"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"delete-a-material"},"Delete a material"),(0,r.kt)("p",null,"TODO"))}u.isMDXComponent=!0}}]);