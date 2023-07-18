import { Socket } from "socket.io";
declare class Room {
    roomId: string;
    private players;
    constructor(id: string);
    /**
     * The join function adds a new player to a room and emits a "user joined" event to all other players
     * in the room.
     * @param {Socket} socket - The `socket` parameter is an instance of the `Socket` class, which
     * represents a connection between the server and a client. It allows for bidirectional communication
     * between the server and the client.
     * @param {string} roomId - The `roomId` parameter is a string that represents the unique identifier
     * of the room that the player wants to join.
     * @param {string} [playerId=hello] - The `playerId` parameter is a string that represents the unique
     * identifier or name of the player joining the room. It is an optional parameter with a default
     * value of "hello".
     */
    join(socket: Socket, roomId: string, playerId?: string): void;
    /**
     * The `leave` function removes a player from a room and logs a message indicating that the player
     * has left.
     * @param {number} playerId - The `playerId` parameter is a number that represents the unique
     * identifier of a player.
     */
    leave(socket: Socket, roomId: string, playerId: string): void;
    /**
     * The function returns the number of players in a game.
     * @returns The number of players in the game.
     */
    getPlayerCount(): number;
    /**
     * The function `getPlayerNames` returns an array of player names by mapping the values of the
     * `players` map to their respective names.
     * @returns The function `getPlayerNames` returns an array of strings, which are the names of the
     * players.
     */
    getPlayerNames(): string[];
}
export default Room;
