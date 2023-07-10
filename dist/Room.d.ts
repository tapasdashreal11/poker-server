import { Socket } from "socket.io";
declare class Room {
    roomId: string;
    private players;
    constructor(id: string);
    /**
     * The join function adds a new player to a room if they are not already in it.
     * @param {Socket} socket - The `socket` parameter is of type `Socket` and represents the connection
     * between the server and the client. It is used to send and receive data between the two.
     * @param {number} playerId - The playerId parameter is a number that represents the unique
     * identifier of the player.
     * @param {string} playerName - The `playerName` parameter is a string that represents the name of
     * the player who wants to join the room.
     */
    join(socket: Socket, roomId: string, playerName?: string): void;
    /**
     * The `leave` function removes a player from a room and logs a message indicating that the player
     * has left.
     * @param {number} playerId - The `playerId` parameter is a number that represents the unique
     * identifier of a player.
     */
    leave(roomId: string): void;
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
