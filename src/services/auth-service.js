import axios from 'axios'

export const login = (user, callback) => {
    axios.post(`/api/auth/login`, user)
        .then(res => {
            callback(res.data, true)
        })
        .catch(err => {
            console.log(err)
            callback(null, false)
        })
}


// Need to implement this....
export const logout = (user, callback) => {
    
}

export const checkUser = (callback) => {
    axios.get(`/api/auth/currentUser`)
        .then(res => {
            callback(res.data, true)
        })
        // User is not authenticatied
        .catch(err => {
            callback(null, false);
        })
}