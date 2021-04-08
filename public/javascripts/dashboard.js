primus = Primus.connect("http://localhost:3000", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

primus.on("data", (json) => {
    if (json.action === "updateStats") {
        let id = json.data.id;
        let score = json.data.score;
        let scoreInput = document.querySelector(`#${id} > .score`);
        scoreInput.innerText = score;
    }
});