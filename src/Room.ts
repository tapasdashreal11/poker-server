import { Socket } from "socket.io";

/* The Room class represents a room where players can join and leave, and provides methods to get the
player count and player names. */
interface Player {
  id: string;
  name: string;
};


class Room {
  public roomId: string;
  private players: Map<string, Player>;

  constructor(id: string) {
    this.players = new Map<string, Player>();
    this.roomId = id
  }

  /**
   * The join function adds a new player to a room if they are not already in it.
   * @param {Socket} socket - The `socket` parameter is of type `Socket` and represents the connection
   * between the server and the client. It is used to send and receive data between the two.
   * @param {number} playerId - The playerId parameter is a number that represents the unique
   * identifier of the player.
   * @param {string} playerName - The `playerName` parameter is a string that represents the name of
   * the player who wants to join the room.
   */
  join(socket: Socket, roomId: string, playerName: string = "hello"): void {
    if (this.players.has(roomId)) {
      console.log(`Player ${playerName} is already in the room.`);
    } else {
      const newPlayer: Player = {
        id: roomId,
        name: playerName,
      };
      socket.join(roomId)
      this.players.set(roomId, newPlayer);
      console.log(`Player ${playerName} has joined the room.`);
    }
  }


  /**
   * The `leave` function removes a player from a room and logs a message indicating that the player
   * has left.
   * @param {number} playerId - The `playerId` parameter is a number that represents the unique
   * identifier of a player.
   */
  leave(roomId: string): void {
    if (this.players.has(roomId)) {
      const player = this.players.get(roomId);
      if (player) {
        console.log(`Player ${player.name} has left the room.`);
        this.players.delete(roomId);
      }
    } else {
      console.log(`Player with ID ${roomId} is not in the room.`);
    }
  }

  /**
   * The function returns the number of players in a game.
   * @returns The number of players in the game.
   */
  getPlayerCount(): number {
    return this.players.size;
  }

  /**
   * The function `getPlayerNames` returns an array of player names by mapping the values of the
   * `players` map to their respective names.
   * @returns The function `getPlayerNames` returns an array of strings, which are the names of the
   * players.
   */
  getPlayerNames(): string[] {
    return Array.from(this.players.values()).map((player) => player.name);
  }
}

export default Room
// Example usage:
// const pokerRoom = new Room();

// // pokerRoom.join(1, "Alice");
// // pokerRoom.join(2, "Bob");
// // pokerRoom.join(3, "Charlie");

// console.log(`Player count: ${pokerRoom.getPlayerCount()}`);
// console.log(`Players: ${pokerRoom.getPlayerNames().join(", ")}`);

// pokerRoom.leave("123");

// console.log(`Player count: ${pokerRoom.getPlayerCount()}`);
// console.log(`Players: ${pokerRoom.getPlayerNames().join(", ")}`);
