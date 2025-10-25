const scrollIndicator= document.getElementById(scrollIndicator);

const totalScrollheight = document.body.scrollHeight - window.innerHeight;

function updateScrollIndicator(){
    const scrollPercentage = (window.scrollY/totalScrollheight)*100;
    scrollIndicator.style.width=scrollPercentage + "%";
}

window.addEventListener("scroll",updateScrollIndicator);

updateScrollIndicator();