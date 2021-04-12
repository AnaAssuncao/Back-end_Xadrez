const express = require('express')
const router = express.Router()
const FunctionsServer = require('./Controller/FunctionsServer')
const functionsServer= new FunctionsServer()
const StartGame = require('./Controller/StartGame')
const startGame= new StartGame()
const GameMovement = require('./Controller/GameMovement')
const movement = new GameMovement()
const StatusGame = require('./Controller/StatusGame')
const status = new StatusGame()
const RecoveryGame = require('./Controller/ReconnectRoom')
const reconnectRoom = new RecoveryGame()
const GameRooms = require('./Models/GameRooms')
const gameRooms = new GameRooms()
const apiPrefix = "/api/v1/"

const nameRouter = {
    wakeUpServer: apiPrefix + "wakeUp",
    startNewRoom: apiPrefix + "startGame/startNewRoom",
    connectInARoom: apiPrefix + "startGame/connectInARoom",
    updateMovement: apiPrefix + "movementGame/updateMovement",
    getMovement: apiPrefix + "movementGame/getMovement",
    incorrectMovement: apiPrefix + "movementGame/incorrectMovement",
    giveUpGame: apiPrefix + "giveUpGame",
    endGame: apiPrefix + "endGame",
    confirmEndGame: apiPrefix + "confirmEndGame",
    statusGame:apiPrefix + "statusGame",
    reconnectRoom:apiPrefix + "reconnectRoom",
    playerWin: apiPrefix + "playerWin"
}

router.get(nameRouter.wakeUpServer,(req,res)=>functionsServer.wakeUpServer(req,res))

router.post(nameRouter.startNewRoom, (req,res)=>startGame.startNewRoom(req,res,gameRooms))

router.post(nameRouter.connectInARoom, (req,res)=>startGame.connectInARoom(req,res,gameRooms))

router.post(nameRouter.updateMovement, (req,res)=>movement.updateMovement(req,res,gameRooms))

router.get(nameRouter.getMovement, (req,res)=>movement.getMovement(req,res,gameRooms))

router.post(nameRouter.incorrectMovement, (req,res)=>movement.incorrectMovement(req,res,gameRooms))

router.post(nameRouter.giveUpGame, (req,res)=>status.giveUp(req,res,gameRooms))

router.post(nameRouter.endGame, (req,res)=>status.endGame(req,res,gameRooms))

router.post(nameRouter.playerWin, (req,res)=>status.playerWin(req,res,gameRooms))

router.get(nameRouter.statusGame,(req,res)=>status.getStatusGame(req,res,gameRooms))

router.post(nameRouter.reconnectRoom, (req,res)=>reconnectRoom.reconnectGame(req,res,gameRooms))

module.exports = router