var userHasScrolled = false;

function trackScrolling() {
    window.onscroll = function() {
        userHasScrolled = true;
    };
    var timeStopped = 0;
    timeStopped = function() {
        while (userHasScrolled !== true) {
            timeStopped++;
            return timeStopped;
        }
    };
}
// 1. Load function when page loads, run function when they start scrolling(possible event listener(Check if this exists))

// 2. Check whether or not user is scrolling (use eventlistener for userscrolling as above?)

// 3. If scrolling !== true then start recording the time they stop for

// 4. If scrolling === stopped > 2 seconds, console.log the fact that they've stopped scrolling

// 5. Make sure that when they start scrolling again it's logged to console how long they were stopped for

// 6. Start tracking function again.

// 7. Rinse and repeat until they leave page? 

// 8. Fin.

trackScrolling(function() {
    console.log("User has stopped scrolling");
});

