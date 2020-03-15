const peopleRemainingOnBus = function(busStops){
    return busStops.reduce((rem, [on, off]) => rem + on - off, 0)
}

module.exports = peopleRemainingOnBus;