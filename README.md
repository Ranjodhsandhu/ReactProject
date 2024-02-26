Learning React from scratch to brush up 

# Parcel
    - parceljs.org
    - Bundler
    - Install as dev dependency
    - Dev build is different from production build
    - Dev build command: npx parcel index.html
    - Production build command: npx parcel build index.html
        - if you get the error that App.js does not match then delete this line - "main": "App.js" - from package.json
    - Local server
    - HMR = Hot Module Replacement
    - File Watching Algorithm - written in c++
    - Uses caching and gives faster builds
    - Image optimization
    - Minification for production builds
    - Compressing the package for production ready
    - Content Hashing
    - Code splitting
    - Differential bundling - (after hosting the app) - takes care of all kind of browsers or old browsers
    - Diganostic
    - Error handling
    - Host app on https://
    - Tree shaking algorithms - removes unused code from builds



# BrowserListjs
    - https://browserslist.dev/
    - Broswer Query compositions on this website

# npm commands
    - *npm start* is same as *npm run start*
    - npm build does not work, you have to write *npm run build*
# JSX
    - It is not HTML but its like HTML syntax. This following statement is a javascript object.
    - JSX attributes are camelCase
    - JSX if written in multiple lines then wrap it with parentheses
    - JSX transpiles the code to HTML by parcel so that the javascript engine can understand this code.
    - Parcel actually gives this responsibility to BABEL to take care of this transpiling
    - JSX =(BABEL)=> React.createElemet ==> ReactElement - JS Object ==> HTML Element on rendering
    - JSX escapes the data / sanitizes the data so that the bad code is not run
    - JSX prevents XSS attacks
# Babel
    - babeljs.io
    - Javascript library
    - Babel is a Javascript Compiler
    - Compiles JSX to Reat code

# React Components
    - Class Based component - Still in use but its an OLD way of writing react code
    - Functional component - NEW way of writing react code
        - regular like javascript function
        - Function name starts with a CAPITAL letter
        - if a function returns a JSX its called Functional Component in React
    - Component Composition - when one component is called in another component