 const button=document.querySelector(".check");
 const inp=document.querySelector("#place");
 const display=document.querySelector("#temp");
 const image=document.querySelector("#image");
 const info=document.querySelector("#temptext");
 const cond=document.querySelector("#con");
 const wind=document.querySelector("#wind");
 const humid=document.querySelector("#humidity");
 
 
 
 async function temperature() {
    const val=inp.value.trim();
    const url="https://api.weatherapi.com/v1/current.json?key=328e90c14d824085bda111630252107&q="+val+"&aqi=no";
   try{ let response=await fetch(url);
    let data=await response.json();
    info.style.fontSize="80px";
    cond.style.fontSize="50px"
    display.classList.remove("hide");
     image.classList.remove("hide");
     cond.classList.remove("hide");
     wind.classList.remove("hide");
     humid.classList.remove("hide");
    info.innerText=data.current.temp_c+"\u00B0C";
    image.src="https:"+data.current.condition.icon;
    cond.innerText=data.current.condition.text;
    wind.innerText="wind speed : "+data.current.wind_kph+"kph"+"wind dir : "+data.current.wind_dir;
    humid.innerText="humidity : "+data.current.humidity;

    console.log(data);}
    catch(error){
        display.classList.remove("hide");
         image.classList.add("hide");
         cond.classList.add("hide");
         wind.classList.add("hide");
          humid.classList.add("hide");
        console.log(error);
        info.style.fontSize="30px";
        info.innerText="sorry couldnot get the data";
        
       
    }
      

    
 }
 button.addEventListener("click",temperature);
 