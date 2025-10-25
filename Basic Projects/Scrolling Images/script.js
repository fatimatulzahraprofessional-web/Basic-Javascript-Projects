const card = document.querySelectorAll(".card");
window.addEventListener("scroll",animateCards);

function animateCards() {
    const checkingButton = (window.innerHeight/4)*(175/35);
    card.forEach((singleCard)=>{
        const cardTop = singleCard.getBoundingClientRect().top;

        let toSlidIn = cardTop < checkingButton;

        if(toSlidIn){
            singleCard.classList.add("slidingIn");
        }else{
            singleCard.classList.remove("slidingIn");
        }
    })
}