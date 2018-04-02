import React from 'react';
import {connect} from 'react-redux';
import * as Status from './status.js';

const Weather = ({status,cityName,weather,lowestTemp,highestTemp}) => {
    switch(status){
        case Status.LOADING:{
            return <div>天气信息请求中</div>
        }
        case Status.SUCCESS:{
            return (
                <div>
                    {cityName}{weather}最低气温{lowestTemp}最高气温{highestTemp}
                </div>
            )
        }
        case Status.FAILURE:{
           return <div>天气信息请求失败</div> 
        }
        default:
            throw new Error('unexpected status'+ status);

    }
}

const mapStateToProps = state =>{
    const weatherData = state.weatherOfCity;
    return {
        status:weatherData.status,
        cityName:weatherData.cityName,
        weather:weatherData.weather,
        lowestTemp:weatherData.lowestTemp,
        highestTemp:weatherData.highestTemp
    }
}
 export default connect(mapStateToProps)(Weather)