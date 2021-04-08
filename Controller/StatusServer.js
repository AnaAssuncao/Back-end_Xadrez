module.exports = class StatusServer{
    wakeUpServer(req,res){
        const awakeServer = "ok"
        res.status(200).send(awakeServer)
    }
}