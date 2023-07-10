import Room from './Room'

class RoomManager {
    private static rooms: Map<string, Room> = new Map<string, Room>();
    // private static nextRoomId: string = 1;
  
    static addRoom(id: string,room: Room) {
      RoomManager.rooms.set(id, room);
    }
  
    static deleteRoom(roomId: string): boolean {
      return RoomManager.rooms.delete(roomId);
    }
  
    static getRoom(roomId: string): Room | undefined {
      return RoomManager.rooms.get(roomId);
    }
  
    static getAllRooms(): Room[] {
      return Array.from(RoomManager.rooms.values());
    }

    static isRoomExists(roomId: string): boolean {
      return RoomManager.rooms.has(roomId)
    }
  }
  
  export default RoomManager