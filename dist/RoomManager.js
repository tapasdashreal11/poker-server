class RoomManager {
    // private static nextRoomId: string = 1;
    static addRoom(id, room) {
        RoomManager.rooms.set(id, room);
    }
    static deleteRoom(roomId) {
        return RoomManager.rooms.delete(roomId);
    }
    static getRoom(roomId) {
        return RoomManager.rooms.get(roomId);
    }
    static getAllRooms() {
        return Array.from(RoomManager.rooms.values());
    }
    static isRoomExists(roomId) {
        return RoomManager.rooms.has(roomId);
    }
}
RoomManager.rooms = new Map();
export default RoomManager;
//# sourceMappingURL=RoomManager.js.map