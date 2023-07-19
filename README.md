# Learn to combine NodeJs and ReactJs

## **How it works**

The Idea from a high level prespective is pretty is Simple, what you need is:
1. A Backend API to serve data to your react app.
2. A React app to request said data while also doing read/write opration to your database through your api.

to make the Idea even more simple your project folder should look something like this.

**-Backend(API)**
- node_modules
- index.html
- package-lock.json
- package.json
- server.js
- router

**-Frontend(React App)**
- node_modules
- public
- src
- index.html
- package-lock.json
- package.json

somethings to take note of is the way to give and receive data from your backend and frontend respectively is by 

**On the backend** you will use the library ***cors*** this Library does [Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) to expose your express API
to download the package type this in your terminal `npm install cors`.
then you need to use it as a middleware,
To do so you need to enter this line after you instantiate your express app (after you import the package) `app.use(cors())`.

**On the frontend** you can use the built in fetch API or for more flexibility use the axios package.
to download the library you need to do the same thing in your react app (remember to switch your terminal from the backend to the frontend so you don't download the package in your backend).
to install `npm install axios` and to fetch data [read the axios docs](https://www.npmjs.com/package/axios).
but for a simple demonstration for how to do get and post requests follow the examples below

**to do a get request**
```
axios.get('https://example.com/')
.then(response => {
    return response.json()
})
.catch(err => console.log(err)) 
```
**to do a post request**
```
axios.post('https://example.com/', dataToSend)
```

try to clone and run the code to see how it works (remember that you need to install the packages for both the backend and frontend servers)
I would advice following [this tutorial](https://www.youtube.com/watch?v=fPuLnzSjPLE) since it does a good job explaining what you're doing if this wasn't clear enough.


and thats all for today have a good one ;)

