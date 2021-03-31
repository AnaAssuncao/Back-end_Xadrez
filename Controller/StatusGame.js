const GameTime = require('./GameTime')
const gameTime = new GameTime
const {InfGame,InfTypeStatus} = require('../Models/PrototypesGame')
const statusServer= require("../StatusServer.js")

module.exports = class StatusGame{
	getStatusGame(req,res,gameRooms){
        const roomCode = req.query.roomCode
        const playerCode = req.query.playerCode
        const existCode = gameRooms.verifyRoomCode(roomCode)
        if(existCode){
            const game = gameRooms.getGameByRoomCode(roomCode)
            game.infPlayers[playerCode].updateTime()
			const statusGame= new InfGame(game,playerCode,statusServer.statusGame.chess)
			res.status(200).send(statusGame)
		}
		else{
            const status = new InfTypeStatus (statusServer.room.noExistRoom)
			res.status(200).send(status)
		}
    }
    endGame(req,res,gameRooms){
        const roomCode = req.body.roomCode
        const endGame = req.body.endGame
        const playerCode = req.body.playerCode
        const game = gameRooms.getGameByRoomCode(roomCode)
        const existCode = gameRooms.verifyRoomCode(roomCode)
        if(existCode){
            if(endGame){
                game.updateEndGamePlayer(playerCode)
                gameTime.verifyToEndGame(gameRooms,game)
                const statusGame= new InfGame(game,playerCode,statusServer.statusGame.endGame)
                res.status(200).send(statusGame)
            }
            else{
                const statusGame= new InfGame(game,playerCode,statusServer.statusGame.chess)
                res.status(200).send(statusGame)
            }
        }  
        else{
            const status = new InfTypeStatus (statusServer.room.noExistRoom)
			res.status(200).send(status)
		}
    }

    giveUp(req,res,gameRooms){
        const roomCode = req.body.roomCode
        const playerCode = req.body.playerCode
        const giveUp = req.body.giveUp
        const existCode = gameRooms.verifyRoomCode(roomCode)
        if(existCode){
            const game = gameRooms.getGameByRoomCode(roomCode)
            if(giveUp){
                game.updateGiveUpPlayer(playerCode)
                gameTime.verifyToEndGame(gameRooms,game)
                const statusGame= new InfGame(game,playerCode,statusServer.statusGame.giveUp)
                res.status(200).send(statusGame)
            }
            else{
                const statusGame= new InfGame(game,playerCode,statusServer.statusGame.chess)
                res.status(200).send(statusGame)
            }
        }
        else{
			const status = new InfTypeStatus (statusServer.room.noExistRoom)
			res.status(200).send(status)
		}
    }
}