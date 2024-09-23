// connection

function blog(){
    window.location.href = "./blog.html";
}

function home(){
    window.location.href = "./index.html";
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

document.getElementById('btnDonation').addEventListener('click', function(){
      document.getElementById('btnDonation').classList.add('bg-[#B4F461]');
      document.getElementById('btnDonation').classList.remove('bg-white');
      document.getElementById('btnDonation').classList.remove('border-slate-300');
      document.getElementById('btnHistory').classList.add('bg-white');
      document.getElementById('btnHistory').classList.add('border-slate-300');
})

document.getElementById('btnHistory').addEventListener('click', function(){
      document.getElementById('btnHistory').classList.add('bg-[#B4F461]');
      document.getElementById('btnHistory').classList.remove('bg-white');
      document.getElementById('btnHistory').classList.remove('border-slate-300');
      document.getElementById('btnDonation').classList.add('border-slate-300');
      document.getElementById('btnDonation').classList.remove('bg-[#B4F461]');
      document.getElementById('btnDonation').classList.add('bg-white');
})




document.getElementById('noakhali').addEventListener('click', function(){

    const amount = donation('noakhaliDonation');
    const addNDonation = parseFloat(document.getElementById('addNDonation').innerText);
    const sum = amount + addNDonation;
    const newBalance = sum.toFixed(2);
    const myBalance = parseFloat(document.getElementById('myBalance').innerText);
    const myNewBalance = myBalance - amount;
   
    if(isNaN(newBalance) || amount<=0){
        alert('Failed to donate.');
    }
    else{
        document.getElementById('addNDonation').innerText = newBalance;
    }
    
    document.getElementById('noakhaliDonation').value= '';
    document.getElementById('myBalance').innerText = myNewBalance;
})
