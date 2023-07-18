import { Socket } from "socket.io";

/* The Room class represents a room where players can join and leave, and provides methods to get the
player count and player names. */
interface Player {
  id: string;
  name: string;
}

class Room {
  public roomId: string;
  private players: Map<string, Player>;

  constructor(id: string) {
    this.players = new Map<string, Player>();
    this.roomId = id;
  }

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
  join(socket: Socket, roomId: string, playerId: string = "hello"): void {
    if (this.players.has(roomId)) {
      console.log(`Player ${playerId} is already in the room: ${roomId}`);
    } else {
      const newPlayer: Player = {
        id: roomId,
        name: playerId,
      };
      socket.join(roomId);
      this.players.set(roomId, newPlayer);
      socket.to(roomId).emit("user joined", { roomId, playerId });
      console.log(`Player ${playerId} has joined the room: ${roomId} `);
    }
  }

  /**
   * The `leave` function removes a player from a room and logs a message indicating that the player
   * has left.
   * @param {number} playerId - The `playerId` parameter is a number that represents the unique
   * identifier of a player.
   */
  leave(socket: Socket, roomId: string, playerId: string): void {
    if (this.players.has(roomId)) {
      const player = this.players.get(roomId);
      if (player) {
        console.log(`Player ${player.name} has left the room.`);
        socket.leave(roomId);
        this.players.delete(roomId);
        socket.to(roomId).emit("user left", socket.id);
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

export default Room;
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
