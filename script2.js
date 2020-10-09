


// const citiesName=[];
// citiesName.push({name="Madrid",
// temp=})


// const arrayofimgs=[
//     {
//         pic:"r01d", 
//         url:"https://www.weatherbit.io/static/img/icons/r01d.png"
//         <img src='${config.weatherIconUrl}${city.weather.icon}.png'>

//     }

//     {   
//         pic:"sunny"
//         url:" "

//     }
// ]



//Since I need to pay for the api with the multiple cities ID link..... I am doing it this way just for practice...

 function fourcities(){

    
    //First City
    fetch("https://api.weatherbit.io/v2.0/current?city=madrid&key=a651bce90b204759b26cf8f366d84456")
    .then((resp)=>{return resp.json()})
    .then((resu)=>{console.log(resu)
        let one=document.getElementById("weatherinfone")
            one.innerHTML=resu.data[0].city_name
         let imageone=document.getElementById("firstimgone")
         let weathernum1=resu.data[0].weather.icon
         //if(result.data[0].weather.icon===)
         imageone.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+weathernum1+".png")
        let tempone=document.getElementById("tempone")
            tempone.innerHTML=resu.data[0].temp+"°"+"C"
            let dateone=document.getElementById("dateone")
            dateone.innerHTML=resu.data[0].datetime     
        })



    //Second City
    fetch("https://api.weatherbit.io/v2.0/current?city=barcelona&key=a651bce90b204759b26cf8f366d84456")
    .then((resp)=>{return resp.json()})
    .then((resu)=>{console.log(resu)
        let two=document.getElementById("weatherinfotwo")
            two.innerHTML=resu.data[0].city_name
        let imagetwo=document.getElementById("firstimgtwo")
        let weathernum2=resu.data[0].weather.icon
        //if(result.data[0].weather.icon===)
        imagetwo.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+weathernum2+".png")
        let temptwo=document.getElementById("temptwo")
            temptwo.innerHTML=resu.data[0].temp+"°"+"C"
            let datetwo=document.getElementById("datetwo")
            datetwo.innerHTML=resu.data[0].datetime 
})



    //Third City
    fetch("https://api.weatherbit.io/v2.0/current?city=paris&key=a651bce90b204759b26cf8f366d84456")
        .then((resp)=>{return resp.json()})
        .then((resu)=>{console.log(resu)
            let three=document.getElementById("weatherinfothree")
                three.innerHTML=resu.data[0].city_name
            let imagethree=document.getElementById("firstimgthree")
            let weathernum3=resu.data[0].weather.icon
            //if(result.data[0].weather.icon===)
            imagethree.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+weathernum3+".png")
            let tempthree=document.getElementById("tempthree")
                tempthree.innerHTML=resu.data[0].temp+"°"+"C"
            let datethree=document.getElementById("datethree")
            datethree.innerHTML=resu.data[0].datetime 
            })


    //Fourth City        
    fetch("https://api.weatherbit.io/v2.0/current?city=tokyo&key=a651bce90b204759b26cf8f366d84456")
    .then((resp)=>{return resp.json()})
    .then((resu)=>{console.log(resu)
        let four=document.getElementById("weatherinfofour")
            four.innerHTML=resu.data[0].city_name
        let imagefour=document.getElementById("firstimgfour")
        let weathernum4=resu.data[0].weather.icon
        //if(result.data[0].weather.icon===)
        imagefour.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+weathernum4+".png")
        let tempfour=document.getElementById("tempfour")
            tempfour.innerHTML=resu.data[0].temp+"°"+"C"
        let datefour=document.getElementById("datefour")
        datefour.innerHTML=resu.data[0].datetime 
           
        })



}

 fourcities();


 let button=document.querySelector(".btn-primary")
const weather=()=>{
    let cityname=document.getElementById("cities").value
    console.log(cityname)
    fetch("https://api.weatherbit.io/v2.0/current?city="+cityname+"&key=a651bce90b204759b26cf8f366d84456")

    .then((response)=>{ 
        return response.json()})

    .then((result)=> {console.log(result)
        console.log(result.data)
        
        let winfo=document.getElementById("weatherinfo")
             winfo.innerHTML=result.data[0].city_name
        let image=document.getElementById("firstimg")
        const weatherIcon = result.data[0].weather.icon;
        image.setAttribute("src", "iconsimg/" + weatherIcon + ".png")
             console.log(result.data[0].weather.icon);
        let temp=document.getElementById("temp")
            temp.innerHTML=result.data[0].temp+"°"+"C"
        let descp=document.getElementById("descp")
                descp.innerHTML=result.data[0].weather.description
        let datemain=document.getElementById("datemain")
            datemain.innerHTML=result.data[0].datetime

            
    
            //map section
             
            //  const latitude = result.data[0].lat;
            //  const longitude = result.data[0].lon;
            //  console.log(latitude, longitude)
            //  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZTEyMzQ1IiwiYSI6ImNrZzBubmJwcjAwdDcycm4xZWhjZnZyYjMifQ.GNbtAJCGVyTaLKRbOzPsog';
            //  var map = new mapboxgl.Map({
            //      container: 'map',
            //      style: 'mapbox://styles/mapbox/streets-v11',
            //      center: [longitude, latitude],
            //      zoom: 8
            //  });
            //  var marker = new mapboxgl.Marker()
            //      .setLngLat([longitude, latitude])
            //      .addTo(map);
    
    
     })

}


button.addEventListener("click", function(){
    // let maincity=document.getElementById("heading")
    //     maincity.style.display="flex"
    let mainp=document.getElementById("mainp")
        mainp.style.display="inline"
    weather();
})
