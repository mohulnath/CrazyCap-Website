document.addEventListener("DOMContentLoaded", function () {
    let imgbox = document.getElementById("imgbox");
    let aboutPage = document.querySelector(".about-page"); // Detect this section

    function myFunction() {
        let triggerHeight = aboutPage.getBoundingClientRect().top; // Check element position

        console.log("Height", triggerHeight)

        if (triggerHeight <= 700) { // Trigger animation earlier
            imgbox.classList.add("active");
            document.getElementById("cap-bt").style.opacity = "1";
            document.getElementById("cap-bt").style.transform = "translateY(-210px)";
            document.getElementById("round-bt").style.width = "500px";
            document.getElementById("round-bt").style.transform = "translateY(-80px)";
            document.getElementById("round-bt").style.left = "67px";
            document.getElementById("content").style.scale = "1.1";
            document.getElementById("content").style.opacity = "1";
            document.getElementById("fullbottle").style.display = "none";
        }

        if (triggerHeight <= 400) {
            imgbox.classList.add("active");

            document.getElementById("cap-bt").style.opacity = "1";
            document.getElementById("cap-bt").style.transform = "translateY(450px)";

            document.getElementById("open-bt").style.opacity = "1";
            document.getElementById("open-bt").style.transform = "translateY(450px)";

            document.getElementById("opencap-bt").style.opacity = "1";
            document.getElementById("opencap-bt").style.transform = "translateY(450px)";
            document.getElementById("opencap-bt").style.zIndex = "0";

            document.getElementById("fullbottle").style.display = "none";
            document.getElementById("fullbottle").style.transform = "translateY(450px)";

        }

        if (triggerHeight <= -90) {
            document.getElementById("cap-bt").style.display = "none";
            document.getElementById("open-bt").style.display = "none";
            document.getElementById("opencap-bt").style.display = "none";
            document.getElementById("fullbottle").style.display = "block";
        }


        if (triggerHeight <= -410) {
            imgbox.classList.add("active");
            document.getElementById("fullbottle").style.transform = "translateY(1100px) translateX(430px) rotate(15deg)";
        }

        if (triggerHeight <= -1000) {
            imgbox.classList.add("active");
            document.getElementById("fullbottle").style.transform = "translateY(1900px) translateX(100px) rotate(15deg)";
        }


    }

    function onScroll() {
        requestAnimationFrame(myFunction);
    }

    window.addEventListener("scroll", onScroll);
});



