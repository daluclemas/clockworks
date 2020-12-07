
let timeDisplay=document.querySelector('.time-header');
let topText=document.querySelector('.top-text');

let toggleContent=document.querySelector('.toggle-content');
let spanGreeting=document.getElementById('span-greeting');
let greeting=document.querySelector('.clock-paragraph');
let toggleText=document.querySelector('.toggle-text');
let toggleAngle=document.getElementById('toggleIcon');

let paragraph=document.querySelector('.paragraph');
let ada=document.querySelector('.ada');
let sync=document.querySelector('.fa-sync-alt');
let amPm=document.querySelector('.am');

let timezone=document.querySelector('.timezone');
let days=document.querySelector('.days');
let day=document.querySelector('.day');
let week=document.querySelector('.week');


let quotes=[
    {
        text:"no one can make you feel inferior without your consent.",
        author:'eleanor roosevelt'
    },

    {
        text:"it is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
        author:'maurice switzer'
    },

    {
        text:"The science of operations, as derived from mathematics more especially, is a science of itself and has it's own abstract truth and value.",
        author:'ada lovelace'
    },

    {
        text:"knowing yourself is the beginning of all wisdom.",
        author:'aristotle'
    },

    {
        text:"the only true wisdom is in knowing you know nothing.",
        author:'socrates'
    }
];

//toggle-texts
sync.addEventListener('click',()=>{

    let indexRan=Math.floor(Math.random()*5);
    paragraph.textContent=`"${quotes[indexRan].text}"`;
    ada.textContent=`${quotes[indexRan].author}`;

});

//toggle-btn
document.querySelector('.toggle-icon').addEventListener('click', ()=>{
    toggleContent.classList.toggle('toggled');
    topText.classList.toggle('toggled');
    iconTextChange();
    iconChange();
   
});

//text-change during toggle
const iconTextChange=()=>{

    if(toggleText.textContent==='less'){
        toggleText.textContent='more';

    }else{
        toggleText.textContent='less';

    }
};

//icon change during toggle
const iconChange=()=>{
    if(toggleAngle.classList.contains('fa-angle-down')){
        toggleAngle.classList.remove('fa-angle-down');
        toggleAngle.classList.add('fa-angle-up');

    }else{
        toggleAngle.classList.remove('fa-angle-up');
        toggleAngle.classList.add('fa-angle-down');
    }
}


//three functions that change the imAGE,ICONS AND GREETINGS

const changeNight=(nightClass,nightText)=>{

        nightClass.classList.remove('fa-sun');
        nightClass.classList.add('fa-moon');
        document.body.style.backgroundImage="url('night.jpg')";
        nightText.innerHTML='good evening';
        toggleContent.style.backgroundColor='rgba(8.24%,13.33%,21.18%,0.6)';
        toggleContent.style.color='white';

};

const changeDay=(dayClass,dayText)=>{
    
    dayClass.classList.remove('fa-moon');
    dayClass.classList.add('fa-sun');
    document.body.style.backgroundImage="url('day.jpg')";
    dayText.innerHTML='good morning';
   
};

const changeMidDay=(dayClass,dayText)=>{
    
    dayClass.classList.remove('fa-moon');
    dayClass.classList.add('fa-sun');
    document.body.style.backgroundImage="url('day.jpg')";
    dayText.innerHTML='good afternoon';
};


//function called to make the required changes on the body
const changes=()=>{

    let dateForm=new Date();
    let hrs=dateForm.getHours();
    let dayS=dateForm.getDay();

    day.textContent=dayS;
    
    if(hrs >= 18){
        changeNight(spanGreeting,greeting);
        

    }else if(hrs >= 11){
        changeMidDay(spanGreeting,greeting);

    }else{
        changeDay(spanGreeting,greeting)
    }

};
changes();


//time display
const timeShow=()=>{

    let dateForm=new Date();
    let hrs=dateForm.getHours();
    let mins=dateForm.getMinutes();
    let day=dateForm.getSeconds();

    mins=(mins<10)? '0'+mins : mins;
    hrs=(hrs<10)? '0'+hrs : hrs;
    timeDisplay.textContent=`${hrs}:${mins}`;
    console.log(day);


    setTimeout(timeShow,1000)
};

timeShow();

//weeks left et al

const toggleChanges=()=>{

    let dateForm=new Date("December 31, 2020 00:01:00");
    let now=new Date();
    let total=dateForm.getTime()-now.getTime();

    let seconds= Math.floor(total/1000);
    let mins= Math.floor(seconds/60);
    let hours= Math.floor(mins/60);
    let daY= Math.floor(hours/24);
    let weeks=Math.floor(daY/7);
    week.textContent=weeks;


    if(total<=0){
        clearTimeout(timer);
        days.textContent='NEW YEAR';

    }else{
        days.textContent=daY;
    }

    let timer=setTimeout(toggleChanges,1000);

}

toggleChanges();

