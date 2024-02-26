# React + TypeScript + Vite

Built with Vite.

To run the application type the following commands

```
npm install
npm run dev
```



You need to create an account on https://firebase.google.com/. Add new project -> disable Google Analytics for this project -> Change location to yours.

In the project click </> Web and register new Web App. After the app is registered you will get firebaseConfig which you need to export to .env file.



## What I learned

How to connect my front-end application to firebase. Firebase provides an easy way to register users to your application. 

The next step was to create protected routes. You cant access /private unless you have are signed in. 
