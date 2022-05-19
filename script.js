const amarilloAprilDailyWindSpeeds = [19.1, 17.9, 21.4, 7.6, 17.3, 19.2, 12.5, 12.8, 15.0, 18.7, 23.0, 11.8, 5.8, 14.9, 21.2, 16.6, 15.5, 10.3, 8.2, 12.9, 14.5, 8.5, 16.7, 7.3, 18.5, 12.8, 16.3, 13.8, 17.7]

//https://www.wunderground.com/history/monthly/us/tx/amarillo/KAMA/date/2020-4


const totalWindSpeed = amarilloAprilDailyWindSpeeds.reduce(function(total, currentWind) {
  return total + currentWind
})

console.log(`The wind blows at ${totalWindSpeed / amarilloAprilDailyWindSpeeds.length} miles an hour during April.`) 