window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#EF476F",
        "#FFD166",
        "#06D6A0",
        "#118AB2",
        "#073B4C",
        "#DD7373"
    ];
    



    // setting up sounds
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            //reset the currentTime to 0 so that the program will allow you to rapidly click the same/other buttons quickly in a row without waiting for the previous audio file to completely play out.
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBalls(index);
        });
    });

    //set up function to generate bouncing ball/visual element
    const createBalls = (index) => {
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = "jump 1s ease";
    };
});