const UserService = require ('./../services/UserService')
class UserView{
    static createUser(payload){
        if (payload === null){
            return{error: "payload no existe"}
        }else
        if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number' ){
            return UserService.create(payload.username, payload.name, payload.id)
        }else{
            return{error: "Las propiedades necesitan tener un valor válido"}
        }
    }
}

module.exports = UserView