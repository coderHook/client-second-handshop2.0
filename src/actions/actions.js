import request from 'superagent'

export const GET_ADS = 'GET_ADS'
export const GET_AD = 'GET_AD'

const baseUrl = 'http://localhost:5000' || 'https://second-handshop.herokuapp.com/'

const getAds = ads => ({
  type: GET_ADS,
  payload: ads
})

const getAd = ad => ({
  type: GET_AD,
  payload: ad
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

