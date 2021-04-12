const {InfTypeStatus} = require('../Models/PrototypesGame')
const statusServer= require("../StatusServer.js")
const GameTime = require('./GameTime')
const gameTime = new GameTime

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
                statusPlayerAdv:null,
                qtMovements:0
            }
            if(existPlayer===true){
                const connectionPlayers = game.verifyConnectionPlayers().includes(true)
                if(connectionPlayers===true){
                    const timeInformeAlive = gameTime.verifyTimePlayerToReconnect(game,playerCode)
                    if(timeInformeAlive===true){
                        connectionStatus.connection=statusServer.room.reconnectRoom
                        connectionStatus.statusPlayerAdv=game.getInfPlayerAdv(playerCode)
                        connectionStatus.qtMovements=game.getQtMovement()
                    }
                }
            }
            res.status(200).send(connectionStatus)
        }
        else{
			const status = new InfTypeStatus (statusServer.room.noExistRoom)
			res.status(200).send(status)
        }
    }
}