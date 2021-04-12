module.exports = class FunctionsServer{
    wakeUpServer(req,res){
        const awakeServer = "ok"
        res.status(200).send(awakeServer)
    }
}