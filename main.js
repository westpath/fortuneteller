function revealOmen() {
    const omen = [ 'angel, meaning news, especially in relationships','butterfly, meaning success and pleasure', 'axe, meaning problems overcome','coffin, meaning lengthy sickness or even death','dragon, meaning large and sudden changes','bird, meaning a journey','candle, meaning enlightenment','cloud, meaning serious trouble','elephant, meaning luck and health','fox, meaning betrayal','gun, meaning disharmony','hourglass, meaning imminent danger','kettle, meaning death','moon, meaning success and prosperity','mushroom, meaning seperation following a fight','owl, meaning sickness and poverty', 'rabbit, meaning success in the city','rat, meaning losses through enemies','ring, meaning marraige','ship, meaning a journey','sword, meaning arguments and fights','unicorn, meaning scandal','worm, meaning secret enemies']
    const advice = ['watch yourself','take care in your day to day','be wary of strangers','be kind to yourself','consider retaliation','ask yourself an important question',`don't think about it too hard`,'consider alternatives','seek friends','seek the light','make peace with your foes','delight in your time','decide on something you have put off','leave it all behind','try something again','confess what you feel','try something new','dwell on this for only a little while','seek freedom','save up','think about this long and hard','live without regret','choose your friends wisely','strangers are friends in-waiting','you have much to see in this world, your problems are nothing compared to the journey.','consider kindness where you normally would not']
    const adj = ['good','mysterious','fortuitous','unfortunate','scary','peculiar','monsterous','beautiful','concerning','unexpected','potent','frightening','bad','curious','likely','expected','wonderous','wonderful','powerful','important','meddling','secret','helpful','unhelpful','powerless','weak','strong','terrible','tense']
    let omenResult = omen[Math.floor(Math.random()*omen.length)]
    let adviceResult = advice[Math.floor(Math.random()*advice.length)]
    let adjResult = adj[Math.floor(Math.random()*adj.length)]
    if (adjResult.charAt(0) === 'a' || adjResult.charAt(0) === 'e' || adjResult.charAt(0) === 'i' || adjResult.charAt(0) === 'o' || adjResult.charAt(0) === 'u') {
        return 'I forsee an ' + adjResult + ' omen. I see the ' + omenResult + '. My advice... hmmm... ' + adviceResult + '.'
    } else {
        return 'I forsee a ' + adjResult + ' omen. I see the ' + omenResult + '. My advice... hmmm... ' + adviceResult + '.'
    }
}

console.log(revealOmen())
