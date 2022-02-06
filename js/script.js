function init(){

 var text = function makeTask() {
 var words1 = ["Website", "Mobile App", "Poster", "Logo", "Advertise", "Banner", "Youtube preview", "Branding"];
 var words2 = ["toys store", "real estate agency", "bookshop", "butcher", "car shop", "confectioner", "corner shop", "dairy", "delicatessen", "department store", "discount store", "dry cleaner's", "electrical goods shop", "fishmonger", "flea market", "florist's", "garden centre", "gift shop", "greengrocer", "grocer", "grocery store", "gun shop", "hardware shop", "hat shop", "jewelry store", "liquor store", "market", "newsstand", "novelty store", "optician", "perfumery", "pet shop", "pharmacy", "produce", "record shop", "sandwich shop", "second-hand shop", "shoe shop", "shop", "shopping centre", "shopping mall", "souvenir shop", "sports shop", "stall", "stationery shop", "supermarket", "tobacconist's shop", "toy shop"];

 var rand1 = Math.floor(Math.random() * words1.length);
 var rand2 = Math.floor(Math.random() * words2.length);
 var phrase = words1[rand1] + " for " + words2[rand2];
 return phrase;
 }

 document.getElementById('generate').onclick = 
 function(){ document.getElementById('text').innerHTML = text(); };
 
}
window.onload = init;
