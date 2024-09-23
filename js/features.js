function blog(){
    window.location.href = "/assignment-5/blog.html";
}

function home(){
    window.location.href = "/assignment-5/index.html";
}


window.addEventListener('scroll', function() {
    const blurElement = document.getElementById('blur');
   
    if (window.scrollY > 0) {
        blurElement.classList.remove('bg-[#F9F7F3]');
    } 
    else {
        blurElement.classList.add('bg-[#F9F7F3]');
    }
});


