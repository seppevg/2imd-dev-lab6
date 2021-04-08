primus = Primus.connect("http://localhost:3000", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

if (document.getElementById("updateForm")) {

    document.getElementById("button").addEventListener("click", (event) => {
        event.preventDefault();

        let error = document.querySelector(".error");
        let id = document.getElementById("player").value;
        let score = document.getElementById("score").value;
        document.getElementById("score").value = "";

        if (score == "" || isNaN(score)) {
            error.style.display = "block";
            error.innerText = "Please enter a valid number.";
        }
        else {
            var audio = new Audio("../audio/180.mp3");
            audio.play();
            error.style.display = "none";
            error.innerText = "";
            primus.write({
                "action": "updateStats",
                "data": {
                    "id": id,
                    "score": score
                }
            })
        }
    });
}