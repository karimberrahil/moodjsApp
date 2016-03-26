$(document).ready(function () {
    var listBarStat = $(".progress-bar"),
        tweetText   = $(".tweetText"),
        nbTweet     = $(".list-group").data("number"),
        tweetTextArr = new Array(),
        arrValue = new Array(null),
        moodJS,
        m = [], 
        var tabGoodMood =["bon", "bien", "super", "parfait", "génial", "magnifique", "good", "great", "awesome", "acceptable", " admirable", " agreeable", " awesome", " bad", " bitchin'", " capital", " choice", " commendable", " crucial", " divine", " dope", " excellent", " fine", " first-class", " first-rate", " great", " hunky-dory", " pleasant", " pleasing", " positive", " precious", " satisfactory", " splendid", " super", " superior", " tiptop", " valuable", " wicked", " world-class", " worthy", " admirable", " estimable", " ethical", " exemplary", " honest", " honourable", " moral", " praiseworthy", " right", " righteous", " trustworthy", " upright", " virtuous", " worthy", " accomplished", " adept", " adroit", " capable", " clever", " competent", " dexterous", " efficient", " expert", " first-rate", " proficient", " reliable", " satisfactory", " serviceable", " skilled", " sound", " suitable", " talented", " thorough", " useful", "  advantageous", " auspicious", " beneficial", " convenient", " favourable", " fit", " fitting", " healthy", " helpful", " opportune", " profitable", " propitious", " salubrious", " salutary", " suitable", " useful", " wholesome", " eatable", " fit to eat", " sound", " uncorrupted", " untainted", " whole", " altruistic", " approving", " beneficent", " benevolent", " charitable", " friendly", " gracious", " humane", " kind", " kind-hearted", " kindly", " merciful", " obliging", " well-disposed", " authentic", " bona fide", " dependable", " genuine", " honest", " legitimate", " proper", " real", " reliable", " sound", " true", " trustworthy", " valid", " decorous", " dutiful", " mannerly", " obedient", " orderly", " polite", " proper", " seemly", " well-behaved", " well-mannered", " agreeable", " cheerful", " congenial", " convivial", " enjoyable", " gratifying", " happy", " pleasant", " pleasing", " pleasurable", " satisfying", " adequate", " ample", " complete", " considerable", " entire", " extensive", " full", " large", " long", " sizable or sizeable", " solid", " substantial", " sufficient", " whole", " best", " fancy", " finest", " newest", " nicest", " precious", " smartest", " special", " valuable", " balmy", " bright", " calm", " clear", " clement", " cloudless", " fair", " halcyon", " mild", " sunny", " sunshiny", " tranquil", "plaisant", "convenable", "savoureux", "doux", "aimable", "gentil", "sociable", "sympathique", "avenant", "beau", "adorable", "admirable", "bien", "brillant", "charmant", "céleste", "coruscant", "délicat", "divin", "délicieux", "éblouissant", "élégant", "bienveillant", "accueillant", "affable", "amical", "brave", "débonnaire", "compréhensif", "favorable", "indulgent", "ouvert", "prévenant", "altruiste", "bonasse", "faible", "mou", "simple", "bonhomme", "serviable", "homme", "gars", "type", "charitable", "caritatif", "généreux", "clément", "miséricordieux", "magnanime", "humain", "compatissant", "excellent", "exemplaire", "édifiant", "parfait", "propice", "heureux", "opportun", "avantageux", "bénéfique", "chanceux", "humanoïde", "bénin", "tolérant", "inoffensif", "anodin", "pacifique", "calme", "tranquille", "innocent", "louable", "méritant", "méritoire", "digne", "juste", "mangeable", "comestible", "consommable", "utile", "nécessaire", "profitable", "indispensable", "fructueux", "précieux", "commode", "pratique", "efficace", "avoir", "capital", "ressources", "affairé", "entreprenant", "diligent", "travailleur", "vif", "empressé", "apanage", "privilège", "caractéristique", "propre", "détenir", "tenir", "disposer", "garder", "renfermer", "possession", "richesse", "crédit", "beau", "adorable", "admirable", "bon", "brillant", "charmant", "céleste", "coruscant", "délicat", "divin", "délicieux", "éblouissant", "élégant", "parfaitement", "oui", "convenablement", "correctement", "propriété", "fortune", "patrimoine", "possessions", "habilement", "adroitement", "expertement", "heureusement", "avantageusement", "favorablement", "honorablement", "joliment", "beaucoup", "louable", "méritant", "méritoire", "digne", "juste", "assurément", "certainement", "entendu", "O.K.", "positif", "affirmatif", "héritage", "legs", "succession", "domaine", "raisonnablement", "modérément", "assez", "sagement", "soit", "ou", "très", "fort", "tout", "trop", "énormément", "excessivement", "généralement", "fortement", "hautement", "infiniment "];

        var tabBadMood =["mauvais", "nul", "craint", "pathetique", "bad", "suck", "awful", "lame", "Chickenshit", " defective", " deficient", " duff", " erroneous", " fallacious", " faulty", " imperfect", " inadequate", " incorrect", " inferior", " low-rent", " of a sort or of sorts", " pathetic", " poor", " poxy", " substandard", " unsatisfactory", "  damaging", " dangerous", " deleterious", " detrimental", " harmful", " hurtful", " injurious", " ruinous", " unhealthy", "  base", " corrupt", " criminal", " delinquent", " evil", " immoral", " mean", " sinful", " vile", " villainous", " wicked", " wrong", " disobedient", " mischievous", " naughty", " unruly", " decayed", " mouldy", " off", " putrid", " rancid", " rotten", " sour", " spoiled", " disastrous", " distressing", " grave", " harsh", " painful", " serious", " severe", " terrible", " ailing", " diseased", " ill", " sick", " unwell", " apologetic", " conscience-stricken", " contrite", " guilty", " regretful", " remorseful", " sad", " sorry", " upset", " adverse", " discouraged", " discouraging", " distressed", " distressing", " gloomy", " grim", " low", " melancholy", " troubled", " troubling", " unfortunate", " unpleasant", "dépravant", "fâcheux", "déplaisant", "regrettable", "ennuyeux", "blessant", "pénible", "douloureux", "contrariant", "agaçant", "gênant", "importun", "gêneur", "indiscret", "immangeable", "inconsommable", "infect", "répugnant", "ignoble", "repoussant", "pestilentiel", "putride", "puant", "abject", "inhumain", "barbare", "abominable", "affreux", "atroce", "bestial", "diabolique", "féroce", "immonde", "infernal", "méchant", "odieux", "monstrueux", "lamentable", "déplorable", "pitoyable", "minable", "désolant", "navrant", "piteux", "piètre", "misérable", "funeste", "mal", "douleur", "crime", "dommage", "perte", "maladie", "malfaisant", "maléfique", "pernicieux", "nuisible", "malin", "astucieux", "débrouillard", "futé", "rusé", "malice", "maudit", "réprouvé", "détestable", "exécrable", "damné", "défectueux", "imparfait", "horrible", "faux", "inexacte", "pauvre", "néfaste", "cruel", "nocif", "dommageable", "préjudiciable", "incommodant", "malsain", "dangereux", "destructeur", "mortel", "délétère", "pire", "pis", "mamelle", "tétine", "téton", "tocard", "laid", "toxique", "poison", "vicieux", "corrompu", "immoral", "pervers", "libidineux", "débauché", "libertin", "dissolu", "luxurieux", "vilain", "hideux", "sale", "désagréable", "incommode", "polluante", "inhumaine", "barbare", "abominable", "affreuse", "atroce", "bestiale", "diabolique", "féroce", "immonde", "infernale", "méchante", "odieuse", "monstrueuse" ];


    tweetText.each(function(){
      tweetTextArr.push($(this).val());
    });
    
    var tabMots =  tweetTextArr;
      
    listBarStat.each(function(){
      arrValue.push($(this).attr("aria-valuenow"));
    });

    $("#statsButton").on('click',function(){ 

    (function (moodJS) {
    var dataToStats = (function () {
        function dataToStats() {
        }
        dataToStats.search = function (sentence, goodWord, badWord) {
            var myTab = [0, 0, 0, 0];
            var longueur = 0;
            if ((goodWord.length > badWord.length))
                longueur = goodWord.length;
            else
                longueur = badWord.length;
            for (var i = 0; i < sentence.length; i++) {
                for (var j = 0; j < longueur; j++) {
                    if ((sentence[i].indexOf(goodWord[j]) >= 0))
                        myTab[0]++;
                    if ((sentence[i].indexOf(badWord[j]) >= 0))
                        myTab[1]++;
                }
            }
            console.log("It works! " + myTab[0] + " bons resultats trouves et " + myTab[1] + " mauvais resultats trouves");
            return myTab;
        };
        return dataToStats;
    }());
    moodJS.dataToStats = dataToStats;
})(moodJS || (moodJS = {}));

m = moodJS.dataToStats.search(tabMots, tabGoodMood, tabBadMood);

console.log(m);
console.log(nbTweet);

var neutre = 100*(1 - (m[0]/nbTweet + m[1]/nbTweet ));

$(listBarStat[0]).attr("aria-valuenow", m[0]/nbTweet * 100).attr("style","width: "+m[0]/nbTweet * 100+"%").html(Math.round(m[0]/nbTweet * 100) + "% <span class='glyphicon glyphicon-heart-empty' aria-hidden='true'>");
$(listBarStat[2]).attr("aria-valuenow", m[1]/nbTweet * 100).attr("style","width: "+m[1]/nbTweet * 100+"%").html(Math.round(m[1]/nbTweet * 100) + "% <span class='glyphicon glyphicon-warning-sign' aria-hidden='true'>");
$(listBarStat[1]).attr("aria-valuenow", neutre).attr("style","width: "+neutre+"%").html(Math.round(neutre) + "% <span class='glyphicon glyphicon-thumbs-up' aria-hidden='true'>");
});




});
