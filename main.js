


function revealOmen() {
    const omen = [ 'angel, meaning news, especially in relationships','butterfly, meaning success and pleasure', 'axe, meaning problems overcome','coffin, meaning lengthy sickness or even death','dragon, meaning large and sudden changes']
    const advice = ['watch yourself','take care in your day to day','be wary of strangers','be kind to yourself','consider retaliation','ask yourself an important question',`don't think about it too hard`,'consider alternatives']
    const adj = ['good','mysterious','fortuitous','unfortunate','scary','peculiar','monsterous','beautiful','concerning','unexpected','potent','frightening','bad']
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