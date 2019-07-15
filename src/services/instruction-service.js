import axios from 'axios'

export const setFavorite = (id) => {

}

export const getTopInstructions = callback => {
    axios.get(`/api/instruction/top`)
        .then(res => {
            callback(res.data)
        })
        .catch(err => {
            console.error(err);
        })
}

export const getInstructionDetails = (id, i, callback) => {
    axios.get(`/api/instruction/get?id=${id}`)
        .then(res=>{
            callback(res.data, i)
        })
        .catch(err => {
            console.error(err);
        })
}