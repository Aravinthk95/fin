var maincontainer=document.createElement('div');
maincontainer.setAttribute('id', 'display');

var parent=document.createElement('div');
parent.setAttribute('class','disp');
maincontainer.append(parent);


document.body.append(maincontainer);


let timer=10;
let time=document.getElementById('display');


setTimeout(() =>{
    // time.className='disp';
    time.innerHTML=timer;
    
     setTimeout(() =>{
         time.className='disp';
         time.innerHTML=timer;
         setTimeout(() =>{
             time.className='disp';
             time.innerHTML=timer;
             setTimeout(() =>{
                 time.className='disp';
                 time.innerHTML=timer;
                 setTimeout(() =>{
                     time.className='disp';
                     time.inner=timer;
                     setTimeout(() =>{
                         time.className='disp';
                         time.innerHTML=timer;
                         setTimeout(() =>{
                             time.className='disp';
                             time.innerHTML=timer;
                             setTimeout(() =>{
                                 time.className='disp';
                                 time.innerHTML=timer;
                                 setTimeout(() =>{
                                     time.className='disp';
                                     time.innerHTML=timer;
                                     setTimeout(() => {
                                        time.className='disp';
                                        time.innerHTML=timer;
                                     
                                     setTimeout(() =>{
                                      
                                         time.className='disp';
                                         time.innerHTML="HAPPY INDEPENDENCE DAY !"
                                         
                                       }, 1000)
                                    },1000)
                                 },1000)
                             },1000)
                         },1000)
                     },1000)
                 },1000)
             },1000)
         },1000)
     },1000)    
},1000);