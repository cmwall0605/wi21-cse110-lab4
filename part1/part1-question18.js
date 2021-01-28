let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}
const entries = Object.entries(statistics);

for (const [property, value] of entries) {
    if(property < 's' && property > 'q') {
        if(value % 2 != 0) {
            console.log(value);
        }
    }
}