Fish App
========

This is a app to showcase sustainable and unsustainable fish to eat. Currently, this encompasses California, but the plan is to expand this to the rest of the United States. Currently, we are using Monterey Bay Aquarium's list of species to eat on the California list. There are three categories.

1. Best Choice
1. Good Alternatives
1. Avoid

As you can guess, best choices are the best fish and seafood species to eat. Good alternatives are species that are okay to eat once in a while. Avoid means don't eat them at all. They are mainly for sustainability reasons, like underpopulation, over-fishing, etc. Also, some of those fish aren't good for your health as they tend to be bottom feeders. Despite the taste of Tuna being king, think how long that Tuna had to be in the water before you could eat it. Then think about the pollution in the ocean. Not a good tasting Tuna now.

## Installation

Start project by typing the following in the project base folder.

```
npm install
npm start
# go to localhost:8080
```

This application is created with React and built with Webpack. For the local development set-up, we are utilizing `webpack-dev-server` to create our server. To build the project for deployment & production, run `npm build`, which will build the components into their own `dist` folder.

## Project Build

The following is a tree of the entire build. It is a reference so I can talk about the different webpack loaders that I'm using. The loaders are a slow learning curve as webpack has something that resembled gulp's streaming pipes or browserify's transformers, but more research must be done. `WIP`

```
.
├── README.md
├── data
│   ├── converter.js
│   ├── fish.csv
│   └── fish.json
├── dist
│   └── bundle.js
├── index.html
├── node_modules
│   ├── babel-core
│   ├── babel-loader
│   ├── css-loader
│   ├── file-loader
│   ├── jsx-loader
│   ├── node-sass
│   ├── react
│   ├── react-hot-loader
│   ├── sass-loader
│   ├── style-loader
│   ├── webpack
│   └── webpack-dev-server
├── package.json
├── src
│   ├── components
│   ├── index.js
│   └── stylesheets
└── webpack.conf.js
```

## TODO

All of my `WIP` tasks

* Install React Router
* Create Routes
* Install Bootstrap OR figure out how to include the bourbon & neat sass libraries.
