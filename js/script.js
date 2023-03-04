let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('second');
let miliseconds = document.getElementById('miliseconds');

let myForm = document.getElementById("myForm");
let typingTimer = document.getElementById("typingTimer");
let timerStop = document.getElementById("timerStop");
let timerReset = document.getElementById("timerReset");

let Interval;
let ml = 00;
let sc = 00;
let mnt = 00;
let hrs = 00;


typingTimer.addEventListener('click', function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);


    timerStop.onclick = function (e) {
        e.preventDefault();
        clearInterval(Interval);
    }

    timerReset.onclick = function () {
        clearInterval(Interval);
        let ml = "00";
        let sc = "00";
        let mnt = "00";
        let hrs = "00";
        miliseconds.innerHTML = ml;
        seconds.innerHTML = sc;
        minutes.innerHTML = mnt;
        hours.innerHTML = hrs;
        myForm.reset();
    }

    function startTimer() {
        // milisecond
        ml++;
        if (ml <= 9) {
            miliseconds.innerHTML = "0" + ml;
        }

        if (ml > 9) {
            miliseconds.innerHTML = ml;
        }

        // second
        if (ml > 99) {
            console.log("second ++");
            sc++;
            seconds.innerHTML = "0" + sc;
            ml = 00;
            miliseconds.innerHTML = "0" + 0;
        }

        if (sc > 9) {
            seconds.innerHTML = sc;
        }

        // minutes
        if (sc > 59) {
            console.log("Minutes++");
            mnt++;
            minutes.innerHTML = "0" + mnt;
            sc = 00;
            seconds.innerHTML = "0" + sc;
        }

        if (mnt > 9) {
            minutes.innerHTML = mnt;
        }

        // hours
        if (mnt > 59) {
            console.log("hours++");
            hrs++;
            hours.innerHTML = "0" + hrs;
            mnt = 00;
            minutes.innerHTML = "0" + mnt;
        }

        if (hrs > 9) {
            hours.innerHTML = hrs;
        }
    }
})
