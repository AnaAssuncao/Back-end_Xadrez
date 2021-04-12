const statusServer= require("../StatusServer.js")

module.exports = class GameTime{
    #times={
        connectPlayer: 180000, 
        movement:300000,
        checkPlayer: 1000, 
        checkMovement: 1000,
        limitEndGame:60,
        reconnectPlayer:3000
    }
    
    verifyInactivity(gameRooms,game,roomCode){
        const timePlayers = setInterval(()=>{
            const existCode = gameRooms.verifyRoomCode(roomCode)
            if(existCode){
                for(let playerCode in game.infPlayers){
                    if((Date.now()-game.infPlayers[playerCode].time)>this.#times.connectPlayer){
                        clearInterval(timePlayers) 
                        const typeEndGame =  statusServer.statusGame.giveUp
                        game.updateEndGame(typeEndGame,playerCode)
                        this.verifyToEndGame(gameRooms,game,roomCode)
                    }
                }
            }
            else {
                clearInterval(timePlayers) 
            }

        },this.#times.checkPlayer)
    }

    verifyDelayToMovement(gameRooms,game,roomCode){
        const timeMovement=setInterval(()=>{
            const existCode = gameRooms.verifyRoomCode(roomCode)
            if(existCode){
                if(game.lastMove.movementTime){
                    if((Date.now()-game.lastMove.movementTime)>this.#times.movement){
                        clearInterval(timeMovement) 
                        const typeEndGame =  statusServer.statusGame.timeOutToMove
                        const codeOfTheNextPlayer = game.getCodeNextPlayer()
                        game.updateEndGamePlayer(typeEndGame,codeOfTheNextPlayer)
                        this.verifyToEndGame(gameRooms,game,roomCode)
                    }
                    const arePlayersConnected = game.verifyConnectionPlayers(game).includes(true)
                    if(arePlayersConnected===false){
                        clearInterval(timeMovement) 
                    }
                }
            }
        },this.#times.checkMovement)  
    }

    verifyToEndGame(gameRooms,game,roomCode,timeCounter=0){
        setTimeout(()=>{         
            const arePlayersConnected = game.verifyConnectionPlayers(game).includes(true)
            if((arePlayersConnected===false) || (timeCounter===this.#times.limitEndGame)){  
                const existCode = gameRooms.verifyRoomCode(roomCode)
                if(existCode){        
                    gameRooms.removeRoom(game.roomCode)
                }
            }
            else{
                timeCounter++
                this.verifyToEndGame(gameRooms,game,roomCode,timeCounter)
            }  
        },this.#times.checkPlayer)
    }

    verifyTimePlayerToReconnect(game,playerCode){
        if((Date.now()-game.infPlayers[playerCode].time)>this.#times.reconnectPlayer){
            return true
        }
        return false
    }
}