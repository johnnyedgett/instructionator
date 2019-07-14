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