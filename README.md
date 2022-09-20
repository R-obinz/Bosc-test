# Bosc-test# Gallery App

A simple, fast and light gallery app  

## Frontend Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
cd frontend\ 
npm i
```
## Backend Installation

Install [Node](https://nodejs.org/en/)    (  [Documentation](https://medium.com/devops-with-valentine/how-to-install-node-js-and-npm-on-windows-10-windows-11-139442f90f12) )

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
cd backend\ 
npm i
```
Create one file name as ".env" and add the below contents

PORT = 5000                                 //  Port for run the server

JWT_SECRET = "Super Key"                          //  This secret key is private to you which means you will never reveal that to the public or inject inside the JWT token.   

MONGOURL= mongodb://localhost:27017 

( Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps )   

CLOUD_NAME                             //  Cloudinary > Account Details > Cloud name.  
API_KEY                                //  Cloudinary > Account Details > API_KEY.  
API_SECRET                             //  Cloudinary > Account Details > API_SECRET. 





## Usage

```js
# change directory to backend
cd backend\  

# start the server
npm start

# change directory to frontend
cd frontend\  

# start the server
npm start


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
robinjustinz011@gmail.com 
