import request from 'superagent'

export const GET_ADS = 'GET_ADS'
export const GET_AD = 'GET_AD'
export const DEL_AD = 'DEL_AD'

const baseUrl = 'https://second-handshop.herokuapp.com'

const getAds = ads => ({
  type: GET_ADS,
  payload: ads
})

const getAd = ad => ({
  type: GET_AD,
  payload: ad
})

const delAd = id => ({
  type: DEL_AD,
  payload: id
})

export const loadAds = () => (dispatch) => {
  request(`${baseUrl}/advertisements`)
    .then(response => {
      dispatch(getAds(response.body))
    })
    .catch(console.error)
}

export const loadAd = (id) => (dispatch) => {
  request(`${baseUrl}/advertisements/${id}`)
  .then(response => {
    console.log(response)
    dispatch(getAd(response.body))
  })
  .catch(console.error)
}

export const deleteAd = (id) => (dispatch) => {
  request(`${baseUrl}/advertisements/${id}`)
    .delete()
    .then(response => {
      console.log('DELETING', response)
      dispatch(delAd(id))
    })
    .catch(console.error)
}