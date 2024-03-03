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

# Props (Properties)
    - To pass values to a component we use props
    - Basically its like we are sending values as arguments to the function

# Export/Import types
    - Default exports/imports (only one default export per file) 
        - Ex: export default componentName;
        - Ex: import component from "fileName";
    - Named exports/imports
        - Ex: export { <ComponentName>,<variableName> };
        - Ex: export const <componentName>
        - Ex: import { <ComponentName>, <variableName } from "fileName";

# React Hooks
    - (Normal JS functions) prebuilt utililty functions in React
    - To use we need to import it from React
    - These are imported as Named compoents (function)
    - Two most important hooks
        - useState() - used to create the state variables in React
            - Whenever a state variable is updated UI is updated with it immediately
        - useEffect()

# Reconcilliation Algorithm (AKA React Fiber (core architecture)) - Came with React 16
    - Link (https://github.com/acdlite/react-fiber-architecture)
    - React does the efficient DOM manipulation with the help of virtual DOM, this is the basic reason for React to be faster than most of the frameworks
    - React creates a virtual DOM for all the UI components
    - Virtual DOM is a representation of actual DOM
    - Virtual DOM is basically a JS object but will convert to DOM when rendered

    - Diff Algorithm
        - Its job is to find the difference between Old Virtual DOM and New Virtual DOM, when state is updated.
    
# Monolith architecture
    - Everything is written in one project including APIs, UI, Authentication, DB etc

# Microservices architecture
    - All services are independent of each other and can be used together to create a big app
    - Separation of concern is the Jargon for this architecture
    - These services interact with each other

# Ways of making API calls
     - Load --> Render --> API --> Re-render (always use this approach for better performance)

# useEffect hook
    - useEffect() 
     