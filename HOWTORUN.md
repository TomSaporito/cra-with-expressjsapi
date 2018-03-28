# create-react-app React Project with Node Express Backend

> Example on using create-react-app with a Node Express Backend

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn
cd client
yarn
```

To start the server and client at the same time

```
yarn dev

or

npm run dev
```

## How this works

The key to use an Express backend with a project created with `create-react-app` is on using a **proxy**. We have a *proxy* entry in `client/package.json`

``` 
"proxy": "http://localhost:5000/"
```

This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on **localhost:5000**

-Esau





## Additional

That is correct, only for development. For production you would need to run yarn build inside the client directory, then CRA will create a build directory with the production build. Back to the server.js file, require path and add the following line

app.use(‘/’, express.static(`${__dirname}/client/build`));
Take a look at this repo for reference, in this example I show how to serve static files with node, which is basically what you need.

Now to deploy to Heroku you need to take several steps, Stephen Grider does an excellent job in this video detailing the process on deploying to Heroku.

I should add a “Production” section to the article…



## SCSS in client dir
`npm-run-all` will run the node-sass-chokidar
This will output a css file next to the .scss file
Include the .css in your bundle and the styles print inline in your app.

You can alternatively exclude that css from your .js and load it in the HTML or you can use the create-react-app directions for modules to load things dynamically.


## Pretty much all majot views will be Async

## how to test production
1. navigate to `/client`
2. run `npm run build`
3. navigate back to root dir
4. change the `NODE_ENV` property in `.env` to anything but "development"
5. run `npm run server`

Now you will see code-splitting and production assets in action


## Can I do this on Heroku?

Can I have the procfile startup the server then run yarn build??
