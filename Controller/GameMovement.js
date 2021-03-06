const { InfMovement, InfTypeStatus  } = require('../Models/PrototypesGame')
const statusServer= require("../StatusServer.js")
const GameTime = require('./GameTime')
const gameTime = new GameTime

module.exports= class Movement {
    updateMovement= async function(req,res,gameRooms){
        const roomCode = req.body.roomCode
        const playerCode = req.body.playerCode
        const moveSent = req.body.movement
        const movementTime = req.body.movementTime
        const existCode = gameRooms.verifyRoomCode(roomCode)
        if(existCode){
            const game = gameRooms.getGameByRoomCode(roomCode)
           if(game.lastMove.playerCode!==playerCode){
                game.updateLastMove(moveSent, playerCode,movementTime)
                if(game.lastMove.availableMovement === true ){
                    const status = new InfMovement(game, playerCode, statusServer.movement.correctMovement)
                    res.status(200).send(status)
                }
                else{
                    const status = new InfMovement(game, playerCode, statusServer.movement.waitAgain)
                    res.status(200).send(status)
                }
            }
            else{
                const status = new InfMovement(game, playerCode, statusServer.movement.waitAgain)
                res.status(200).send(status)
            }
        }
		else{
			const status = new InfTypeStatus (statusServer.room.noExistRoom)
			res.status(200).send(status)
		}
    }

    getMovement = function(req,res,gameRooms){
        const roomCode = req.query.roomCode
        const playerCode = req.query.playerCode
        const existCode = gameRooms.verifyRoomCode(roomCode)
        if(existCode){
            const game = gameRooms.getGameByRoomCode(roomCode)
            if(game.lastMove.playerCode!==playerCode){
                if(game.lastMove.availableMovement === true){
                    const status = new InfMovement(game, playerCode, statusServer.movement.movementAvailable)
                    res.status(200).send(status)
                }
                else{
                    const status = new InfMovement(game, playerCode, statusServer.movement.movementUnavailable)
                    res.status(200).send(status)
                }      
            }
            else if(game.lastMove.incorretMovement){
                const status = new InfMovement(game, playerCode, statusServer.movement.incorrectMovement)
                res.status(200).send(status)
            }
            else{
                    const status = new InfMovement(game, playerCode, statusServer.movement.waitAgain)
                    res.status(200).send(status)
            }
        }
		else{
			const status = new InfTypeStatus (statusServer.room.noExistRoom)
			res.status(200).send(status)
		}
    }

    incorrectMovement(req,res,gameRooms){
        const roomCode = req.body.roomCode
        const playerCode = req.body.playerCode
        const incorrectMovement = req.body.incorrectMovement
        const existCode = gameRooms.verifyRoomCode(roomCode)
        if(existCode){
            const game = gameRooms.getGameByRoomCode(roomCode)
            if(game.lastMove.playerCode!==playerCode){
                if(incorrectMovement===true){
                    const typeEndGame =  statusServer.statusGame.giveUp
                    game.updateEndGamePlayer(typeEndGame,playerCode)
                    gameTime.verifyToEndGame(gameRooms,game,roomCode)
                    game.reportIncorretMovement()
                    res.status(200).send(statusServer.movement.confirmedMove)
                }
            }
            else{
                res.status(200).send(statusServer.movement.waitAgain)
            }
        }
		else{
			const status = new InfTypeStatus (statusServer.room.noExistRoom)
			res.status(200).send(status)
		}
    }
}