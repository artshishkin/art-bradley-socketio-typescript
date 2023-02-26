[![GitHub issues](https://img.shields.io/github/issues/artshishkin/art-bradley-socketio-typescript)](https://github.com/artshishkin/art-bradley-socketio-typescript/issues)
![Project licence][licence]

# art-bradley-socketio-typescript

[Tutorial - Socket.IO and TypeScript - from Sean Bradley (Udemy)](https://sbcode.net/tssock/)

#### 8. Create the Socket IO Project

- `npm init`

#### 9. Install Dependencies and Types

1. Install Types for NodeJS
    - `npm install @types/node@16 --save-dev`
2. Install SocketIO
    - `npm install socket.io@4`

#### 10. Compile, Run and Setup tsconfig.json

1. Compiling with options
    1. To Compile the TypeScript file
        - `tsc src/server/server.ts --outDir dist/server/ --esModuleInterop true`
    2. To serve the JavaScript output file
        - `node dist/server/server.js`
2. Compiling with tsconfig.json
    1. To compile
        - `tsc -p src/server`
    2. To serve the JavaScript output file
        - `node dist/server/server.js`

#### 11. TSC Watch, Nodemon and Concurrently

- After creating the tsconfig.json, we can now compile and watch for changes using
    - `tsc -p src/server/ -w`
- We can host using
    - `node dist/server/server.js`
- The nodejs doesn't restart when there are changes to the files, so we can install nodemon
    - `npm install nodemon@2 --save-dev`
- Now host the server using
    - `npx nodemon dist/server/server.js`
- Install concurrently
    - `npm install concurrently@7 --save-dev`
- Add this line to the package.json scripts section
    - `"dev" : "concurrently -k \"tsc -p ./src/server -w\" \"nodemon ./dist/server/server.js\"",`
- And start using
    - `npm run dev`

#### 12. Create the SocketIO Client

Install express and it's types

- `npm install express@4`
- `npm install @types/express@4 --save-dev`

#### 13. Use TypeScript to Generate Client JavaScript

- Install the Socketio-Client and Types
    - `npm install socket.io-client@4`
    - `npm install @types/socket.io-client@1 --save-dev`
- You can manually recompile using
    - `tsc -p ./src/client -w`
- Or update npm dev script to concurrently generate changes
    - `"dev" : "concurrently -k \"tsc -p ./src/server -w\" \"tsc -p ./src/client -w\" \"nodemon ./dist/server/server.js\"",`

#### 22. Install Bootstrap

- `npm install jquery@3`
- `npm install @types/jquery@3 --save-dev`
- `npm install bootstrap@4`
- `npm install @types/bootstrap@4 --save-dev`

[licence]: https://img.shields.io/github/license/artshishkin/art-bradley-socketio-typescript.svg
