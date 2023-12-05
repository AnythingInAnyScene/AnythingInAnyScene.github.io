//========================= Load HTML Content =========================
$(function(){
$("#banner-video").load("src/html/banner.html"); 
$("#abstract-content").load("src/html/abstract.html"); 
$("#overview-content").load("src/html/overview.html"); 
$("#outdoor-result").load("src/html/outdoor.html"); 
$("#indoor-result").load("src/html/indoor.html"); 
$("#ours-result").load("src/html/result.html"); 
$("#downstream-result").load("src/html/downstream.html"); 
$("#code-video-download").load("src/html/code.html"); 
});

//========================= Back to Top Button =========================
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
scrollFunction();
};
function scrollFunction() {
if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}