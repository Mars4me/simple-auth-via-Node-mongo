# Node JS auth (from https://www.youtube.com/c/UlbiTV)

* [General info](#general-info)
* [Setup](#setup)

## General info
This project is a simple node js app, creating own express module.

## Setup
Should be created at the root of the project config.js.  
```js
//js code
module.exports = {
    login : 'db user',
    password:'password',
    dbName: 'your db name',
    secret: "random secret key"
}
```

To run this project, install it locally using npm

```
$ git clone *https* or via *SSH*
$ npm start
