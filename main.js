function showContent (){
    document.getElementById("dropContent").classList.toggle("show")
}

function showText (i){
    const text = document.getElementById(i);

    text.classList.toggle("show");
}

function openModal(){
    const modal = document.getElementById("modal");
    modal.classList.toggle("show");
}
function closeModal(){
    const modal = document.getElementById("modal");
    modal.classList.toggle("show");
}