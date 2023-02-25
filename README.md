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


[licence]: https://img.shields.io/github/license/artshishkin/art-bradley-socketio-typescript.svg
