
        let b1 = document.getElementById("btn1");
        let b2 = document.getElementById("btn2");
        let copytext = document.querySelector(".text");
        let rgb1 = "#004773";
        let rgb2 = "#54d542";
        let intervalId1 = null, intervalId2 = null;

        const colorGenerator = () => {
            let hexavalues = "0123456789abcdef";
            let colors = "#";
            for(let i = 0; i < 6; i++) { 
                colors += hexavalues[Math.floor(Math.random() * 16)];
            }
            return colors;
        };

        const handlebtn1 = () => {
            rgb1 = colorGenerator();
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            copytext.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
            b1.innerText = `${rgb1}`;
        };

        const handlebtn2 = () => {
            rgb2 = colorGenerator();
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            copytext.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
            b2.innerText = `${rgb2}`;
        };

        copytext.addEventListener("click", () => {
            navigator.clipboard.writeText(copytext.innerHTML);
        });

        function toggleColorChange1() {
            if (intervalId1) {
                clearInterval(intervalId1);
                intervalId1 = null;
            } else {
                intervalId1 = setInterval(handlebtn1, 1000);
            }
        }

        function toggleColorChange2() {
            if (intervalId2) {
                clearInterval(intervalId2);
                intervalId2 = null;
            } else {
                intervalId2 = setInterval(handlebtn2, 1000);
            }
        }

        b1.addEventListener("click", toggleColorChange1);
        b2.addEventListener("click", toggleColorChange2);
  
