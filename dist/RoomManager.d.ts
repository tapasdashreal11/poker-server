import Room from "./Room";
declare class RoomManager {
    private static rooms;
    /**
     * The addRoom function adds a room to the RoomManager using the provided id and room object.
     * @param {string} id - The id parameter is a string that represents the unique identifier for the
     * room.
     * @param {Room} room - The "room" parameter is an instance of the "Room" class.
     */
    static addRoom(id: string, room: Room): void;
    /**
     * The function deletes a room from the RoomManager using its roomId.
     * @param {string} roomId - The `roomId` parameter is a string that represents the unique
     * identifier of the room that needs to be deleted.
     * @returns A boolean value is being returned.
     */
    static deleteRoom(roomId: string): boolean;
    /**
     * The function `getRoom` returns a `Room` object based on the provided `roomId` or `undefined` if
     * the room does not exist.
     * @param {string} roomId - The `roomId` parameter is a string that represents the unique
     * identifier of a room.
     * @returns a Room object or undefined.
     */
    static getRoom(roomId: string): Room | undefined;
    /**
     * The function returns an array of all the rooms in the RoomManager.
     * @returns The method `getAllRooms` is returning an array of `Room` objects.
     */
    static getAllRooms(): Room[];
    /**
     * The function checks if a room with a given ID exists in the RoomManager.
     * @param {string} roomId - The `roomId` parameter is a string that represents the unique
     * identifier of a room.
     * @returns A boolean value indicating whether a room with the given roomId exists in the
     * RoomManager.
     */
    static isRoomExists(roomId: string): boolean;
}
export default RoomManager;
