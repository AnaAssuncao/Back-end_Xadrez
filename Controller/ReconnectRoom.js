const {InfTypeStatus} = require('../Models/PrototypesGame')
const statusServer= require("../StatusServer.js")

module.exports = class RecoveryGame{
    reconnectGame(req,res,gameRooms){
		const roomCode = req.body.roomCode
        const playerCode = req.body.playerCode
		const existCode = gameRooms.verifyRoomCode(roomCode)
		if(existCode){
            const game = gameRooms.getGameByRoomCode(roomCode)
            const existPlayer = game.verifyCodePlayers(playerCode)
            const connectionStatus ={
                connection:statusServer.room.roomNotReconnected,
                statusPlayerAdv:null
            }
            if(existPlayer===true){
                const connectionPlayers = game.verifyConnectionPlayers()
                if(connectionPlayers){
                    connectionStatus.connection=statusServer.room.reconnectRoom
                    connectionStatus.statusPlayerAdv=game.getInfPlayerAdv(playerCode)
                    res.status(200).send(connectionStatus)
                }
                else{
                    res.status(200).send(connectionStatus)
                 }
            }
            else{
                res.status(200).send(connectionStatus)
            }
        }
        else{
			const status = new InfTypeStatus (statusServer.room.noExistRoom)
			res.status(200).send(status)
        }
    }
}