

document.addEventListener('DOMContentLoaded',init=()=>{

    const login="Login";
    const register= "Register";
    const navArray=['Feature','Company','Careers','About'];
    const FeatureArray=['Todo List','Calender','Reminder','Planning'];
    const companyArray=['History','Our Team','Blog']

   //Navigation Bar DOM Randering
   document.getElementById('login').innerHTML=login;
   document.getElementById('register').innerHTML=register;
   document.getElementById('web-text').innerHTML=" Get your team in sync, no matter your location. <br> Streamline processes ,create team rituals, and <br> watch productivity soar."
  document.getElementById('web-text-header').innerHTML="Make <br>Remote Work";
  document.getElementById('learn-more').innerHTML="Learn More";
  
    document.getElementById('Careers').innerHTML=navArray[2];
    document.getElementById('About').innerHTML=navArray[3];
   
    const dropFeature=document.getElementById('dropdown-btn1');  //Feature Button Mousever eventListener method
     dropFeature.addEventListener('mouseover', setFeatureBtn=(ev)=> {
     document.getElementById("todo").innerHTML=FeatureArray[0];
     document.getElementById("calender").innerHTML=FeatureArray[1];
     document.getElementById("reminder").innerHTML=FeatureArray[2];
     document.getElementById("planning").innerHTML=FeatureArray[3];
     console.log('SetFeture method');
     document.querySelector(".dropFeatureAarrow").src="./images/icon-arrow-up.svg";

  });
   
dropFeature.addEventListener("mouseout", setCompanyBtn=(ev)=> // Set Feature dropDown btn down on "mouseou" eventLister
{
 document.querySelector(".dropFeatureAarrow").src="./images/icon-arrow-down.svg";
});

  
  const copmanyBtn=document.getElementById('dropdown-btn'); //Company dropdown button mouseover eventLister function
  copmanyBtn.addEventListener('mouseover', setCompanyBtn=(ev)=> {
  document.getElementById("History").innerHTML=companyArray[0];
  document.getElementById("team").innerHTML=companyArray[1];
  document.getElementById("blog").innerHTML=companyArray[2];

  
  document.querySelector(".dropCompayAarrow").src="./images/icon-arrow-up.svg";   // Set Company dropDown btn down on "mouseou" eventLister
  console.log('company method');
});

  
copmanyBtn.addEventListener("mouseout", setCompanyBtn=(ev)=>
{
 document.querySelector(".dropCompayAarrow").src="./images/icon-arrow-down.svg";
});


   console.log('stared Dom');

  
   

  
   });



   
   
