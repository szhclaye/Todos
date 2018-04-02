import {
    FETCH_STARTED,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from './actionTypes';

/* 3个同步action */
export const fetchWeatherStarted = () => ({
    type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchWeatherFailure = (err) => ({
    type: FETCH_FAILURE,
    err
});

/* 异步action */
export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = '/data/cityinfo/${cityCode}.html';

        dispatch(fetchWeatherStarted);
        fetch(apiUrl).then(response => {
            if (response.status !== 200) {
                throw new Error('Failure', response.status);
            }
            response.json()
                .then(responseJson => {
                    dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
                })
                .catch(err =>{
                    throw new Error('Invalid json response:'+ err)
                })
        })
        .catch (error =>{
              dispatch(fetchWeatherFailure(error));
        })
    }
}