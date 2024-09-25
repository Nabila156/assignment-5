// connection

function blog(){
    window.location.href = "./blog.html";
};


function home(){
    window.location.href = "./index.html";
};


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

// close Confirmation

document.getElementById('closeConfirmation').addEventListener('click', function(){
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('showPopup').classList.remove('brightness-[0.5]','backdrop-blur-lg');
});

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

    document.getElementById('my_modal_1');


    let localTime = new Date().toLocaleTimeString();
    let localDate = new Date().toLocaleDateString();
    const historyList = document.createElement('div');
    historyList.className = "bg-white p-5 rounded-xl border w-[70%] m-auto mb-6";
    historyList.innerHTML = `
      
           <p class="text-xl text-[#111111] font-bold">${amount} Taka has been Donated for Flood Relief in Noakhali, Bangladesh.</p>
           <p class="text-base text-slate-500 font-medium">Date : ${localDate}, Time : ${localTime}</p>

     `;

     const historyContainer = document.getElementById('history');
     historyContainer.insertBefore(historyList, historyContainer.firstChild);

     congrats();


     document.getElementById('showPopup').classList.add('brightness-[0.5]', 'backdrop-blur-lg');
});


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


    let localTime = new Date().toLocaleTimeString();
    let localDate = new Date().toLocaleDateString();
    const historyList = document.createElement('div');
    historyList.className = "bg-white p-5 rounded-xl border w-[70%] m-auto mb-6";
    historyList.innerHTML = `
      
           <p class="text-xl text-[#111111] font-bold">${amount} Taka has been Donated for Flood Relief in Feni, Bangladesh.</p>
           <p class="text-base text-slate-500 font-medium">Date : ${localDate}, Time : ${localTime}</p>

     `;

     const historyContainer = document.getElementById('history');
     historyContainer.insertBefore(historyList, historyContainer.firstChild);

     congrats();


     document.getElementById('showPopup').classList.add('brightness-[0.5]', 'backdrop-blur-lg');
});



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


    let localTime = new Date().toLocaleTimeString();
    let localDate = new Date().toLocaleDateString();
    const historyList = document.createElement('div');
    historyList.className = "bg-white p-5 rounded-xl border w-[70%] m-auto mb-6";
    historyList.innerHTML = `
      
           <p class="text-xl text-[#111111] font-bold">${amount} Taka has been Donated for The Injured in The Quota Movement of Bangladesh.</p>
           <p class="text-base text-slate-500 font-medium">Date : ${localDate}, Time : ${localTime}</p>

     `;

     const historyContainer = document.getElementById('history');
     historyContainer.insertBefore(historyList, historyContainer.firstChild);

     congrats();

     document.getElementById('showPopup').classList.add('brightness-[0.5]', 'backdrop-blur-lg');
});


// donation & history buttons

document.getElementById('btnDonation').addEventListener('click', function(){
    document.getElementById('btnDonation').classList.add('bg-[#B4F461]');
    document.getElementById('btnDonation').classList.remove('bg-white', 'border-slate-300');
    document.getElementById('btnHistory').classList.remove('bg-[#B4F461]');
    document.getElementById('btnHistory').classList.add('bg-white', 'border-slate-300');
});
document.getElementById('btnHistory').addEventListener('click', function(){
    document.getElementById('btnHistory').classList.add('bg-[#B4F461]');
    document.getElementById('btnHistory').classList.remove('bg-white', 'border-slate-300');
    document.getElementById('btnDonation').classList.add('bg-white', 'border-slate-300');
    document.getElementById('btnDonation').classList.remove('bg-[#B4F461]');
});

// history


document.getElementById('btnHistory').addEventListener('click', function(){
       document.getElementById('history').classList.remove('hidden');
       document.getElementById('home').classList.add('hidden');
});
document.getElementById('btnDonation').addEventListener('click', function(){
       document.getElementById('history').classList.add('hidden');
       document.getElementById('home').classList.remove('hidden');
});