/**
 * This is a TypeScript server-side code for a multiplayer poker game using Socket.io and Express.
 */
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import RoomManager from "./RoomManager.js";
import Room from "./Room.js";
const app = express();
app.get("/", (req, res) => {
    res.send("<h1>Poker Server is runnning...</h1>");
});
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});
const PORT = 3000;
// interface RoomMap {
//     readonly roomId: number;
//     room: Room;
// }
let players = [];
let communityCards = [];
let pot = 0;
function resetGame() {
    players = [];
    communityCards = [];
    pot = 0;
}
/* The code block you provided is the event listener for the 'connection' event in Socket.io. When a
new user connects to the server, this event listener is triggered. */
io.on("connection", (socket) => {
    console.log(`New user connected: ${socket.id}`);
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
        const disconnectedPlayer = players.find((player) => player.id === socket.id);
        if (disconnectedPlayer) {
            players = players.filter((player) => player.id !== socket.id);
            io.emit("playerDisconnected", disconnectedPlayer);
        }
    });
    // Usage example: Listening for a message event
    // emitEvent()
    /* The `socket.on('joinGame', ...)` function is an event listener that listens for the 'joinGame'
      event from the client-side. When this event is triggered, it executes the provided callback
      function. */
    socket.on("joinGame", (data, callback) => {
        const objData = JSON.parse(data);
        const { playerId, roomId } = objData;
        const newPlayer = {
            id: socket.id,
            playerId,
            chips: 1000,
            hand: [],
        };
        if (RoomManager.isRoomExists(roomId)) {
            const room = RoomManager.getRoom(roomId);
            room === null || room === void 0 ? void 0 : room.join(socket, playerId, roomId);
        }
        const newRoom = new Room(roomId);
        console.log(`New room with id: ${roomId} has been created!`);
        console.log({ data });
        callback({
            success: true,
            message: `New room with id: ${roomId} has been created!
      Also the player: ${playerId} has been added.`,
            data,
        });
        newRoom.join(socket, roomId, playerId);
        // RoomManager.addRoom("123",)
        // players.push(newPlayer);
        // io.emit('playerJoined', newPlayer);
        // if (players.length >= 2) {
        //     startGame();
        // }
    });
    socket.on("leaveGame", (data, callback) => {
        const objData = JSON.parse(data);
        const { playerId, roomId } = objData;
        const newPlayer = {
            id: socket.id,
            playerId,
            chips: 1000,
            hand: [],
        };
        if (RoomManager.isRoomExists(roomId)) {
            const room = RoomManager.getRoom(roomId);
            room === null || room === void 0 ? void 0 : room.leave(socket, playerId, roomId);
        }
        const newRoom = new Room(roomId);
        console.log(`New room with id: ${roomId} has been created!`);
        console.log({ data });
        newRoom.leave(socket, roomId, playerId);
        callback({
            success: true,
            message: `Player :${playerId} has left the room: ${roomId}`,
            data,
        });
        // RoomManager.addRoom("123",)
        // players.push(newPlayer);
        // io.emit('playerJoined', newPlayer);
        // if (players.length >= 2) {
        //     startGame();
        // }
    });
    function startGame() {
        // Perform game initialization
        io.emit("gameStarted", players);
    }
    socket.on("placeBet", (amount) => {
        const currentPlayer = players.find((player) => player.id === socket.id);
        if (currentPlayer && currentPlayer.chips >= amount) {
            currentPlayer.chips -= amount;
            pot += amount;
            io.emit("betPlaced", { playerId: socket.id, amount });
        }
    });
    // ... Implement other game-related actions such as dealing cards, handling turns, etc.
});
server.listen(PORT, "192.168.1.105", () => {
    console.log(`Server listening on http://192.168.1.105:${PORT}`);
});
//# sourceMappingURL=server.js.map