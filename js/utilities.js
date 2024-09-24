function donation(id){
    const amount = parseFloat(document.getElementById(id).value);
    return parseFloat(amount.toFixed(2));
}

function totalDonationAndMyBalance(id){
    const totalDonation = parseFloat(document.getElementById(id).innerText);
    return totalDonation;
}

function clear(id){
    const clear = document.getElementById(id).value= '';
    return clear;
}