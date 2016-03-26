$(document).ready(function () {
    var listBarStat = $(".progress-bar"),
        tweetText   = $(".tweetText"),
        nbTweet     = $(".list-group").data("number"),
        tweetTextArr = new Array(),
        arrValue = new Array(null),
        moodJS,
        m = [], 
        tabGoodMood =["bon", "bien", "super", "parfait", "génial", "magnifique", "good", "great", "awesome"],
        tabBadMood =["mauvais", "nul", "craint", "pathetique", "bad", "suck", "awful", "lame"];

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
