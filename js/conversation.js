
commands = FuzzySet();
TREASHOLD = 0.8

function getIntent(intent) {
    var c = commands.get(intent)

    if (c == null || c[0] < TREASHOLD) {
        return "tohle neumime"
    }

    return c[0][1]
}

intentActions = {
    "demonstrace": { "text": "Zajděte na uřad pro povoleni o necem", "isFinal": true },
    "ztráta": { "text": "A kde to bylo?", "isFinal": false },
    "v tramvaji": { "text": "Zajděte na pmdp", "isFinal": true },
}

console.log(Object.keys(intentActions))
for (var x of Object.keys(intentActions)) {
    commands.add(x)
}



function speak(intent) {
    var i = getIntent(intent)
    console.log("intent", i, intentActions[i]);
    return intentActions[i]
}