window.addEventListener('load' , ()=>{
    
     const data =  JSON.parse(localStorage.getItem("weatherData")) ;
     console.log(typeof(data)) ;


     const location = document.querySelector('.temperature-box-location-country') ;
     const temperature = document.querySelector('.temperature-box-value-num') ;
     const temperatureUnit = document.querySelector('.temperature-box-value-num-unit') ;

     location.innerHTML = `${data.name} , ${data.sys.country}` ;

     temperature.innerHTML = `${parseInt(data.main.temp)}`  ;
     temperatureUnit.innerHTML = `&degC`

    //  lets change background 
    const body = document.querySelector('.body1') ;
    const temperatureValue = parseInt(data.main.temp) ;
    // body.style.backgroundColor = "black" ;
    if(temperatureValue >= -10 && temperatureValue < 10){
          body.style.backgroundImage = "url('images/temp1.jpg')" ;    
    }
    else if(temperatureValue >= 10 && temperatureValue < 20){
          body.style.backgroundImage = "url('images/temp2.jpg')" ;   
    }
    else if(temperatureValue >=20 && temperatureValue < 30){
          body.style.backgroundImage = "url('images/temp3.jpg')" ;   
    }
    else if(temperatureValue >=30 && temperatureValue < 40){
        body.style.backgroundImage = "url('images/temp4.jpg')" ;   
    }
    else{
        body.style.backgroundImage = "url('images/temp5.jpg')" ;   
    }

    const temperatureMin = document.querySelector('.temperature-box-min-val') ;
    const temperatureMax = document.querySelector('.temperature-box-max-val') ;
    temperatureMin.innerHTML = `${parseInt(data.main.temp_min)}` ;
    temperatureMax.innerHTML =  `${parseInt(data.main.temp_max)}` ;

    const description = document.querySelector('.weather-description');
    description.innerHTML = `${data.weather[0].description}` ;
     

     





})