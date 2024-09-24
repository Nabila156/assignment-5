// connection

function blog(){
    window.location.href = "./blog.html";
}

function home(){
    window.location.href = "./index.html";
}

function history(){
    window.location.href = "./history.html";
}



// blur

window.addEventListener('scroll', function() {
    const blurElement = document.getElementById('blur');
   
    if (window.scrollY > 0) {
        blurElement.classList.remove('bg-[#F9F7F3]');
    } 
    else {
        blurElement.classList.add('bg-[#F9F7F3]');
    }
});


// donation

// noakhali

document.getElementById('noakhali').addEventListener('click', function(){

    donationInput = document.getElementById('noakhaliDonation').value;
    const containsLetters = /[a-zA-Z]/.test(donationInput);

    const amount = donation('noakhaliDonation');
    const totalDonationN = totalDonationAndMyBalance('totalDonationN');
    const myBalance = totalDonationAndMyBalance('myBalance');
    const sum = amount + totalDonationN;
    const newBalance = parseFloat(sum.toFixed(2));
    const myNewBalance = myBalance - amount;
    
    if(isNaN(amount) || amount<=0 || amount>myBalance || containsLetters){
        alert('Failed to donate. Please enter a valid amount.');
        return;
    }
    else{
        document.getElementById('totalDonationN').innerText = newBalance;
    }
    
    clear('noakhaliDonation');
    document.getElementById('myBalance').innerText = myNewBalance;
})


// feni

document.getElementById('feni').addEventListener('click', function(){

    donationInput = document.getElementById('feniDonation').value;
    const containsLetters = /[a-zA-Z]/.test(donationInput);

    const amount = donation('feniDonation');
    const totalDonationF = totalDonationAndMyBalance('totalDonationF');
    const myBalance = totalDonationAndMyBalance('myBalance');
    const sum = amount + totalDonationF;
    const newBalance = parseFloat(sum.toFixed(2));
    const myNewBalance = myBalance - amount;
    
    if(isNaN(amount) || amount<=0 || amount>myBalance || containsLetters){
        alert('Failed to donate. Please enter a valid amount.');
        return;
    }
    else{
        document.getElementById('totalDonationF').innerText = newBalance;
    }
    
    clear('feniDonation');
    document.getElementById('myBalance').innerText = myNewBalance;
})



// quota movement

document.getElementById('quota').addEventListener('click', function(){

    donationInput = document.getElementById('quotaDonation').value;
    const containsLetters = /[a-zA-Z]/.test(donationInput);

    const amount = donation('quotaDonation');
    const totalDonationQ = totalDonationAndMyBalance('totalDonationQ');
    const myBalance = totalDonationAndMyBalance('myBalance');
    const sum = amount + totalDonationQ;
    const newBalance = parseFloat(sum.toFixed(2));
    const myNewBalance = myBalance - amount;
    
    if(isNaN(amount) || amount<=0 || amount>myBalance || containsLetters){
        alert('Failed to donate. Please enter a valid amount.');
        return;
    }
    else{
        document.getElementById('totalDonationQ').innerText = newBalance;
    }
    
    clear('quotaDonation');
    document.getElementById('myBalance').innerText = myNewBalance;
})


