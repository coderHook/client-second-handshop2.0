import request from 'superagent'

export const UPDATE_AD = 'UPDATE_AD';

const updateAd = (editedAd) => {
  return {
    type: UPDATE_AD,
    payload: editedAd
  }
}

const baseUrl = 'https://second-handshop.herokuapp.com'

export const editAd = (editAd, token) => (dispatch) => {
  request
    .put(`${baseUrl}/advertisements/${editAd.id}`)
    .set({ 'Authorization': 'Bearer ' + token })
    .send(editAd)
    .then(response => {
      console.log('CLient', response)
      dispatch(updateAd(response.body.updated))
    })
    .catch(console.error)
}
