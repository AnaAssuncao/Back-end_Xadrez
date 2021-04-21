const {InfPlayer} = require('./PrototypesGame')

module.exports = class Room{
    #color={
        white:"white",
        black:"black",
    }
    constructor(roomCode,playerCode,namePlayer,playerColor){
        this.roomCode = roomCode,
        this.playersCode={
            white:playerCode,
            black:null
        }
        this.infPlayers= {
            // Chave do objeto é o codigo do jogador. Objeto contém as informações de cada jogador.
        }
        this.statusGame = {
            currentPlayer:"white",
            connectionPlayers: false,
            endGame: {
                isEndGame:false,
                type:null,
                playerName:null
            }
        }
        this.historyMovement=[]
        this.lastMove = {
            qtMovements:0,
            availableMovement:false,
            incorretMovement:false,
            movementTime:null,
            playerCode:null,
            movement: null
            // {movement: fullName,color,typeMovement,specialMovement,refId e piecePromotion}
        }
        this.startPlayerOne(playerCode,namePlayer,playerColor)
    }
    
    startPlayerOne(playerCode, namePlayer,playerColor){
        this.infPlayers[playerCode] = new InfPlayer(playerCode, namePlayer,playerColor)
    }
    addSecondPlayer(playerCode,namePlayer,playerColor){
        this.lastMove.movementTime=Date.now()
        this.playersCode.black=playerCode
        this.lastMove.playerCode = null
        this.statusGame.connectionPlayers=true
        this.infPlayers[playerCode] = new InfPlayer(playerCode, namePlayer,playerColor)
    }
    updateEndGamePlayer(type,playerCode){
        if(this.statusGame.endGame.isEndGame===false){
            this.statusGame.endGame.isEndGame=true
            this.statusGame.endGame.type=type
            this.statusGame.endGame.playerName=this.infPlayers[playerCode].namePlayer
        }
        this.infPlayers[playerCode].connection=false
        this.infPlayers[playerCode].giveUp=false
        this.infPlayers[playerCode].endGame=true
    }
    updateLastMove(movement, playerCode,movementTime){
        if(this.lastMove.movement){
            if(this.lastMove.movement.color!==movement.color){
                this.lastMove.corretMovement= true
                this.lastMove.availableMovement = true
                this.lastMove.playerCode = playerCode
                this.lastMove.movement = movement
                this.lastMove.movementTime = movementTime
                this.lastMove.qtMovements++
                const nextPlayer=(this.#color.white===this.lastMove.movement.color)?this.#color.black:this.#color.white
                this.statusGame.currentPlayer=nextPlayer
                const history = playHistory(movement, playerCode,movementTime)
                this.historyMovement.push(history)
            }
            else{
                this.lastMove.availableMovement = false
            }
        }
        else{
            this.lastMove.playerCode = playerCode
            this.lastMove.movement = movement
            this.lastMove.availableMovement = true
            this.lastMove.movementTime = movementTime
            this.lastMove.qtMovements++
            const nextPlayer=(this.#color.white===this.lastMove.movement.color)?this.#color.black:this.#color.white
            this.statusGame.currentPlayer=nextPlayer
            const history = playHistory(movement, playerCode,movementTime)
            this.historyMovement.push(history)
        }
        console.log(this.historyMovement)
    }
    getCodes(playerCode){
        const statusCodes = {
            roomCode:this.roomCode,
            playerCode: playerCode
        }
        return statusCodes
    }
    getLastMovement(){
        const move=this.lastMove.movement
        this.lastMove.availableMovement = false
        return move
    }
    getInfPlayerAdv(playerCode){
        const advCode = (playerCode===this.playersCode.white)? this.playersCode.black:this.playersCode.white
        const statusPlayerAdv ={ 
            namePlayer:null,
            color:null,
            connection:null,
            giveUp:false,
            endGame:false
        }
        if(advCode){
            statusPlayerAdv.namePlayer=this.infPlayers[advCode].namePlayer,
            statusPlayerAdv.color=this.infPlayers[advCode].color,
            statusPlayerAdv.connection=this.infPlayers[advCode].connection,
            statusPlayerAdv.giveUp=this.infPlayers[advCode].giveUp,
            statusPlayerAdv.endGame=this.infPlayers[advCode].endGame  
        }
        return statusPlayerAdv

    }
    getStatusGame(){
        const statusGame = {
            connectionPlayers:this.statusGame.connectionPlayers,
            endGame:this.statusGame.endGame
        }
        return statusGame
    }
    getQtMovement(){
        return this.lastMove.qtMovements
    }
    reportIncorretMovement(){
        this.lastMove.incorretMovement=true
        const movement={movement:"incorretMovement"}
        this.historyMovement.push(movement)
    }
    verifyPlayers(){
        if(this.playersCode.white!==null && this.playersCode.black!==null){
            return false
        }
        return true
    }
    verifyConnectionPlayers(){
        const connectionPlayers =[false,false]
        if(this.infPlayers[this.playersCode.white].connection===true && this.infPlayers[this.playersCode.white].endGame===false){
            connectionPlayers[0]=true
        }
        if(this.playersCode.black){
            if(this.infPlayers[this.playersCode.black].connection===true && this.infPlayers[this.playersCode.black].endGame===false){
                connectionPlayers[1]=true
            }
        }
        return connectionPlayers
    }
    verifyCodePlayers(playerCode){
        if(this.infPlayers[playerCode]){
            return true
        }
        return false
    }
    getCodeNextPlayer(){
        const codeOfTheNextPlayer = this.playersCode[this.statusGame.currentPlayer]
        return codeOfTheNextPlayer
    }
}

function playHistory(movement, playerCode,movementTime){
    return {
        playerCode: playerCode,
        movement: movement,
        movementTime: movementTime,
    }
}