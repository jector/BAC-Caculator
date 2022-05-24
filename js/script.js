$("form").on("submit", bacCalculator);

function bacCalculator(event) {
    event.preventDefault();
    /* Variables from inputs */
    // get weight
    let weight = Number( $("input#weight").val() );
    // get Number of beers consumed
    let nBeers = Number( $("input#numberBeers").val() );
    // get Glasses of wine consumed
    let gWine = Number( $("input#glassesWine").val() );
    // get Ounces of spirits consumed
    let onSpirits = Number( $("input#ouncesSpirits").val() );
    // get Hours since first drink
    let hFirst = Number( $("input#hoursSinceFirst").val() );

    let finalBAC = totalLiquid(nBeers, gWine, onSpirits, weight, hFirst);

    $("#finalResult b").text(finalBAC);
    $("#rangeGraph").val(finalBAC);
}
function totalLiquid(a, b, c, d, e) {
    /* Calculate BAC */
    // step 1. Determine the total liquid ounces
    let totalL = (a * 0.54)+(b * 0.6)+(c * 0.6);
    // step 2. The average alcohol absorption rate
    let averageRate = totalL * 7.5;
    // step 3. Determine their BAC
    let bac = averageRate / d
    // step 4. Hour since their first drink
    let bacAndHours = bac - (e * 0.015) ;
    // step 5. Round the result
    let resultRound = Number(bacAndHours.toFixed(3));

    return resultRound;
}