var timer = document.querySelector('#timer');
var toggleBtn = document.querySelector('#toggle-btn');
var resetBtn = document.querySelector('#reset');

function workoutTimer(elem) {
   
    var time = 0;
    var offset;
    var interval;
  
    function update() {
        if(this.isOn){
         time += delta();
        }
        var formattedTime = timeFormatter(time);
        elem.textContent = formattedTime;
  
    }
  
    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
  
      offset = now;
  
      return timePassed;
    }
  
    function timeFormatter(time) {
      var time = new Date(time);
      var hours =  Math.floor(time.getMinutes() / 60);
      var minutes = time.getMinutes().toString();
      var seconds = time.getSeconds().toString();
      var milliseconds = time.getMilliseconds().toString();

      
  
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
  
      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
  
      while (milliseconds.length < 3) {
        milliseconds = '0' + milliseconds;
      }
  
      return  `${hours}  :  ${minutes}  :  ${seconds}  .  ${milliseconds}`;
    }
    this.isOn = false;
  
    this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
      
    };
  
    this.stop = function() {
        if(this.isOn){
        clearInterval(interval);
        interval = null;
        this.isOn = false;
        }
     
    };
  
    this.reset = function() {
        if(!this.isOn){
         time = 0;
         update();
        }
      
    };
  
    
  }



var watch = new workoutTimer(timer);

toggleBtn.addEventListener('click', function() {

    if(watch.isOn){
        watch.stop();
        toggleBtn.textContent ="start";
        toggleBtn.style.backgroundColor="#0000FF";
      toggleBtn.style.borderColor="blue";
      
      }else{
        watch.start();
        toggleBtn.textContent = "stop";
                      toggleBtn.style.backgroundColor="red";
        toggleBtn.style.borderColor="red";

        
      }

  });

  resetBtn.addEventListener('click', function() {
    watch.reset();
  });
