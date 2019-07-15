import axios from 'axios'

export const getProfileForUser = (callback) => {
    axios.get(`/api/profile/get`)
        .then(res => {
            callback(res.data, true)
        })
        .catch(err => {
            callback(null, false)
        })
}

export const addFavoriteToProfile = (instructionId) => {
    axios.get(`/api/profile/addFavorite?instructionId=${instructionId}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}