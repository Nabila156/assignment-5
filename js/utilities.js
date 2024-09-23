function donation(id){
    const amount = parseFloat(document.getElementById(id).value);
    return parseFloat(amount.toFixed(2));
}