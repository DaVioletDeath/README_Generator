const axios = require("axios");



const api = {
    getUser(userName){
    return axios.get("https://api.github.com/users/" + userName).catch(err => {
        process.exit(1)
    })        
    }
}


module.exports = api