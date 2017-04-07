Chatty App.
=====================

To run:
- open two terminal windows
- install dependancies
  - window 1 - cd chatty_server/ && npm install
  - window 2 - npm install
- window1 - start webserver
  - cd chatty_server/ && npm start
- window 2 - build react app:
  - npm start
- open several browser windows, and navigate to localhost:3000
- start talking to yourself

Technical Specifications
Stack:
Webpack with Babel, JSX, ES6, webpack dev server (comes with boilerplate)
WebSockets using Node package ws on the server-side, and native WebSocket on client side
ReactJS
React component guidelines:

A single root component (e.g. App) should be responsible for the main application state, as well as communication with the WebSocket server
A message list component renders the chat log (chat messages and system notifications)
A chat bar component provides an input field for changing your username and an input field for sending messages. These input fields do not need to be React-style "controlled inputs", although they can be.
Client websocket behaviour:

opens a websocket connection as soon as the App component is mounted
the connection stays open until the client closes the page (or otherwise disconnects)
sends chat messages and (name change) notifications initiated by the current user
handles broadcast messages (chat, notifications, user count) from the server and may alter state accordingly
Websocket server specs:

The Chatty client app and Chatty websocket server are separate Node apps each with their own package.json
It's a simple server using express and ws
The server should send and receive JSON-encoded messages
When a client sends a message:
the server should determine what to do based on the message's type property
it should construct a message to send back in response with a corresponding type and a generated unique id (e.g. a UUID)
When a client connects or disconnects, the server should broadcast the current user count to all connected clients
(STRETCH) the server may assign and/or keep track of user colours (there are several ways of solving this)