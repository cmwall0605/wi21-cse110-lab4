var intervalID = setInterval(tellTime, 1000);

function tellTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

