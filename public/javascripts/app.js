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

        let player = document.getElementById("player").value;
        let score = document.getElementById("score").value;
        document.getElementById("score").value = "";

        primus.write({
            "action": "Updated stats",
            "data": {
                "player": player,
                "score": score
            }
        })
    });

}