window.addEventListener('load' , ()=>{

   
    setTimeout( ()=>{
        const splash = document.querySelector('.splash') ;
        const mainContent = document.querySelector('.main-content') ;

        splash.style.opacity = 0 ;
        setTimeout(()=>{
        splash.style.display  = 'none'; 
        mainContent.style.opacity = 1 ;
        mainContent.classList.add('visible') ;

        } ,400) ;
    } ,3000) ;
    
})



const apikey = "b64aadd6c73c7414088a64096baa76e9" ;
const input = document.querySelector('.hero-input') ;
const btn = document.querySelector('.hero-btn') ;

btn.addEventListener('click' , ()=>{
    const cityName = input.value ;
    if(cityName!=""){
        GeoCordinates(cityName) ;
    }
    else{
        alert("plaese enter the city name") ;
    }
 }) ;

function GeoCordinates(name){
   const url = `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${apikey}&units=metric `
   
   function resolve(data){
    console.log("type of data" , typeof(data)) ;
    console.log("raw data" , data) ;
     return data.json() ;
   }
   fetch(url)
            .then(resolve)
            .then((data)=>{
                const lat = data[0].lat ;
                const lon = data[0].lon ;
                weather(lat , lon) ;

            })
            .catch((error)=>{
                console.log(error) ;
                alert("Please enter valid city name") ;
            })
    
}

async function weather(lat , lon){
     const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
     
     async function fetchWeatherData(url2){
         try{
        const response = await fetch(url2) ;
        console.log("weather raw data" , response) ;
        const weatherParsedData = await response.json() ;
        console.log("json weather data" , weatherParsedData) ;
        return weatherParsedData ;

       }
         catch(error){
            console.log("there is error" , error) ;
            alert("weather data error") ;
         }

     }
     

     const weatherData = await fetchWeatherData(url2) ;
     if(weatherData){
        displayWeatherData(weatherData) ;
     }
     else{
        alert("serivice down") ;
     }
   


}

function displayWeatherData(weatherData){
 
   const data = weatherData ;
   localStorage.setItem("weatherData" , JSON.stringify(data) ) ;

   window.location.assign('another.html') ;

   
}





