const quotes = [
    "I no longer have a manager, i cannot be managed.",
    "I need a room full of mirrors so I can be surrounded by winners.",
    "once again i am being attacked for presenting new ideas",
    "I'm nice at ping pong",
    "Sometimes i push the door close butting on people running towards the elevator. i just need my own elevator sometimes. My sanctuary.",
    "Mari kart",
    "How to NOT kill yourself pt 1: Avoid being around people who make you want to kill yourself",
    "Theres so many lonely emojis man",
    "In jesus name   No more cap",
    "you may be talented, but you're not kanye west",
    "To my fans   thank you for being loyal and patient  i cant finish the album because theres a bee in the studio",
    "I hate when im on a flight and i wake up with a water bottle next to me like oh great now i gotta be responsible for this water bottle",
    "Bowl"
];

function givequote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        quotes[randomIndex];
}
