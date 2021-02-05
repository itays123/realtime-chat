# Realtime Chat

This project was created with `create-react-app`, `deno` and `TypeScript`<br />
To launch it, use **`deno run --allow-net --allow-read app.ts`**

## Backend Architecture

This backend is a semi object-oriented backend created using TypeScript.<br />
In order to connect to the chatroom `websocket` connection, send a request to the `/ws` route.<br />

Any valid websocket connection made is handled using the `chatConnection()` function, located in `utils/chatroom.ts`.<br />
In this function, the connection is linked to the `Broadcaster` object-oriented class which handles any new events received by the connection.

## Frontend Architecture

This frontend is developed with React.js, with a veriety of components. For a detailed list of them, refer to the `client` folder.
