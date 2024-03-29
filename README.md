
If loading this website fails the first time, refresh the page again. It's Vercel (deployed platform) issue.

[Live Preview](https://e-gadget.vercel.app/)

![app](https://user-images.githubusercontent.com/77607002/180618977-da08b887-1ab6-4d01-b1e1-b2c1877b81ed.jpg)


## A Full Stack E-Commerce Application


- Frontend 
  - NextJS
  - Material UI
  - Tailwind CSS
  
For rapid ui development mui and tailwind are used together. 


After developing backend and frontend in the same repository, at the last moment I decide to put backend in a different repository.
Custom server has some limitations. So I had to copy the server folder and paste it into eGadget-backend repository.

[Link](https://github.com/Sakib-lite/eGadget-backend)


- Backend 
  - ExpressJS
  - Mongoose(NoSQL)
  - JWT Token
  - Mongo Sanitizer
  - Compression
  - Sharp
  - Multer
  - Stripe
  - Dotenv
  - Validator
  - Xss-Clean
  - Bcrypt
  - Nodemailer
  - Slugify
  - Morgan

----------------------------------------------------
## User

- Role
  - User(default)
  - Admin
  - Moderator

#### Routing Pattern
-POST  Signup            -/api/users/signup <br/>
-GET   Login             -/api/users/login <br/>
-POST  Forgot-Password   -/api/users/forgot-password <br/>
-PATCH Reset-Password    -/api/users/reset-password <br/>
-PATCH Change-Password   -/api/users/change-password   <br/>
-PATCH Update User info  -/api/users/(id) <br/>
-GET   Get Me            -/api/users/me <br/>
-GET   Get All Users     -/api/users (Restricted Route) <br/>

----------------------------------------------------
## Mobile

#### Routing Pattern
-POST   Create Mobile            -/api/product/mobile <br/>
-GET    Get All Mobiles          -/api/product/mobile <br/>
-GET    Get Mobile by slug       -/api/product/mobile/(slug) <br/>
-PATCH  Update Mobile            -/api/product/mobile/(id) <br/>
-Delete Delete Mobile            -/api/product/mobile/(id) (Restricted Route) <br/>
-GET    Mobile Statistics        -/api/product/mobile/mobile-statistics (Restricted Route) <br/>

----------------------------------------------------
## Laptop

#### Routing Pattern
-POST   Create Laptop            -/api/product/laptop  <br/>
-GET    Get All Laptops          -/api/product/laptop <br/>
-GET    Get Laptop by slug       -/api/product/laptop/(slug) <br/>
-PATCH  Update Laptop            -/api/product/laptop/(id) <br/>
-Delete Delete Laptop            -/api/product/laptop/(id) (Restricted Route) <br/>
-GET    Laptop Statistics        -/api/product/laptop/laptop-statistics (Restricted Route) <br/>

----------------------------------------------------
## Other Products

#### Routing Pattern
-POST   Create Product            -/api/product/other <br/>
-GET    Get All Products          -/api/product/other <br/>
-GET    Get Product by slug       -/api/product/other/(slug) <br/>
-PATCH  Update Product            -/api/product/other/(id) /
-Delete Delete Product            -/api/product/other/(id) (Restricted Route) <br/>
-GET    Product Statistics        -/api/product/other/other-statistics (Restricted Route) <br/>

----------------------------------------------------
## Search Products

#### Routing Pattern

-GET    Search Products           -/api/search?name=iphone 

----------------------------------------------------
## Review Products

#### Routing Pattern
-POST   Create Review             -api/product/mobile/(id)/review  (nested route with merged params) (Proteceted Route) <br/>
-GET    Get All Reviews           -/api/review (restricted route) <br/>
-GET    Get Review by Id          -/api/review/(id) <br/>
-PATCH  Update Review             -/api/review/(id) (Proteceted Route) <br/>
-Delete Delete Review             -/api/review/(id) (Proteceted Route) <br/>
-GET    Review Statistics         -/api/review/review-stats <br/>


----------------------------------------------------
## Order Products

#### Routing Pattern

-GET    Get Checkout Session      -/api/order/checkout-session (Proteceted Route) <br/>
-POST   Webhook Checkout          -/webhook-checkout (Proteceted Route) <br/>

- API Documentation
  - Postman [link](https://documenter.getpostman.com/view/19059263/UzXKWe4k) 
