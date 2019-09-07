
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
    "demonstrace": "Zajděte na uřad pro povoleni o necem",
    "ztráta": "A kde to bylo?",
    "v tramvaji": "Zajděte na pmdp",
}

console.log(Object.keys(intentActions))
for(var x of Object.keys(intentActions)) {
    commands.add(x)
}



function speak(intent) {
    var i = getIntent(intent)
    console.log("intent", i, intentActions[i]);
    return intentActions[i]
}