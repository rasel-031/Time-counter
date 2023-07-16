
const intervalIds = [];
const duration_sec = [];
const intervalTime = 1000;
const userTime = [];
let flag = 1;
let userID = 0;
let Id = 0;
var formattedTime;

function createUser() {
    
    var user_name = document.getElementById("userName").value;
    var user_time = document.getElementById("userTime").value;

    if(user_name !== "" && user_time > 0){

    document.getElementById("userName").value = "";
    document.getElementById("userTime").value = "";

    //create new div
    var cardDiv = document.createElement('div');
    var cardName = document.createElement('div');
    var userName = document.createElement('p');
    var cardTime = document.createElement('div');
    userTime[userID] = document.createElement('p');
    var cancleButton = document.createElement('button');

    cardName.innerHTML="<b>Name</b>";
    userName.textContent = user_name;

    cardTime.innerHTML="<b>Time</b>";
    userTime[userID].textContent = updateTimerDisplay(parseInt(user_time*60));

    cancleButton.id = 'cancleMe';
    cancleButton.textContent = 'Cancle';

    cardName.appendChild(userName);
    cardTime.appendChild(userTime[userID]);
    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardTime);
    cardDiv.appendChild(cancleButton);
    
    cancleButton.style=`height: 2rem; border-radius:10px;background-color:white;padding: 0rem 1rem;`;
    cardDiv.style=`display:flex; justify-content: space-between; align-items:center; margin-bottom:2rem; 
    background-color:rgb(249, 168, 212);padding:1rem;border-radius:10px;`;

    
    var new_container = document.getElementById('newContainer');
    new_container.appendChild(cardDiv);

    //cancle btn action
    cancleButton.addEventListener('click', function() {
      var parentElement = cardDiv.parentNode;
      parentElement.removeChild(cardDiv);
      clearInterval(userTime[Id]);
    });

    duration_sec.push(parseInt(user_time*60));
        
    //setInterval Timer
    Id = setInterval(newTimer(Id), intervalTime);
    intervalIds.push(Id);

    //div counter
    userID++;
    }
}

function newTimer(Id) {
  
  return function() {
    if(duration_sec[Id] > 0){
    duration_sec[Id]--;
    userTime[Id].textContent = updateTimerDisplay(duration_sec[Id]);
    user_name = "";
    user_time = "";
  }else{
    userTime[Id].textContent = "Time Up";
    userTime[Id].style = `color:red;`;
  }
    
  };
}

function updateTimerDisplay(duration_sec) {
    
    var hours = Math.floor(duration_sec / 3600);
    var minutes = Math.floor((duration_sec % 3600) / 60);
    var seconds = duration_sec % 60;
    
    formattedTime = hours.toString().padStart(2,0) + ':' + minutes.toString().padStart(2, '0') + ':' +
                        seconds.toString().padStart(2, '0');

    return formattedTime;
  }

 