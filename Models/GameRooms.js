const Room = require('./PrototypeRoom')
class GameRooms{
    #createdRooms={}
    addNewRoom(roomCode,playerCode,playerName,playerColor){
        this.#createdRooms[roomCode]= new Room(roomCode,playerCode,playerName,playerColor)
        return this.#createdRooms[roomCode]
    }
    removeRoom(roomCode){
        setTimeout(()=>{
            delete this.#createdRooms[roomCode]
        })
    }
    verifyRoomCode(roomCode){
        if(this.#createdRooms[roomCode]){
            return true
        }
        return false
    }
    getGameByRoomCode(roomCode){
        return this.#createdRooms[roomCode]
    }
}

module.exports = GameRooms