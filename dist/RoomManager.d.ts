import Room from './Room';
declare class RoomManager {
    private static rooms;
    static addRoom(id: string, room: Room): void;
    static deleteRoom(roomId: string): boolean;
    static getRoom(roomId: string): Room | undefined;
    static getAllRooms(): Room[];
    static isRoomExists(roomId: string): boolean;
}
export default RoomManager;
