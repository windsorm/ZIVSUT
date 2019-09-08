
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
    "demonstrace": { "text": "Kde bude demonstrace probíhat?", "isFinal": false },
    "náměstí republiky": { "text": "Zajděte na Úřad městského obvodu Plzeň 3 </br> sady Pětatřicátníků 7-9, Plzeň </br> Dnes mají otevřeno do 17 hodin a v úterý do 14:30.", "isFinal": true },
    "ztráta": { "text": "A kde to bylo?", "isFinal": false },
    "v tramvaji": { "text": "Zajděte na pmdp", "isFinal": true },
    "body řidičský průkaz": { "text": "Máte zřízený elektronický podpis?", "isFinal": false },
    "nemám": { "text": "Zajděte si na Magistrát města Plzně, Odbor registru vozidel a řidičů v ulici Koterovská 162, Plzeň </br> Dnes mají otevřeno do 18 hodin a v úterý do 12:00.", "isFinal": true},
    "ano": { "text": "Vyplňte si formulář elektronicky na stránce <a target=\"_blank\" href=\"https://form602.plzen.eu/aforms.php?action=webfiller&foaction=6&id_form=13&plz_obv=MMP&logout=1\">Elektronické podání občana</a>", "isFinal": true },
    "manželství brát": { "text": "Jste Čech nebo cizinec?", "isFinal": false },
    "čech cizinec": { "text": "Zajděte na Úřad městského obvodu Plzeň 3 </br> Odbor sociálních služeb a matriky, sady Pětatřicátníků 7-9, Plzeň</br> Dnes mají otevřeno do 17 hodin a v úterý do 12:00.", "isFinal": true },

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