
loadCSS = function(href) {

    var cssLink = $("<link>");
    $("head").append(cssLink); //IE hack: append before setting href
  
    cssLink.attr({
      rel:  "stylesheet",
      type: "text/css",
      href: "style.css"
    });
  };

  //FIRST PAGE TRANSLATION 
$(function(){
    $("#ta").click(function(){
       $("#kodaivizha").html("கடந்த நிகழ்வுகள்: கோடாய் விசா");
       loadCSS("style.css");
  });
});

$(function(){
    $("#en").click(function(){
       $("#kodaivizha").text("Past Events: Kodai Vizha");
       loadCSS("style.css");
  });
});

$(function(){
  $("#ta").click(function(){
     $("#kodaivizhatext").text("கோடை விழாவைக் கொண்டாட எங்களுடன் சேருங்கள்.");
     loadCSS("style.css");
});
});

$(function(){
  $("#en").click(function(){
     $("#kodaivizhatext").text("Kodai Vizha 2020 is a summer festival celebrated by Tamils around the world.");
     loadCSS("style.css");
});
});

$(function(){
  $("#ta").click(function(){
     $("#kodaivizhabutton").text("நிகழ்வைக் காண்க.");
     loadCSS("style.css");
});
});

$(function(){
  $("#en").click(function(){
     $("#kodaivizhabutton").text("Learn more.");
     loadCSS("style.css");
});
});

$(function(){
  $("#ta").click(function(){
     $("#title").text("அயர்லாந்து தமிழ் சங்கம்");
     loadCSS("style.css");
});
});

$(function(){
  $("#en").click(function(){
     $("#title").text("Ireland Tamil Sangam");
     loadCSS("style.css");
});
});

$(function(){
  $("#ta").click(function(){
     $("#hi").text("அயர்லாந்து தமிழ் சங்கம் என்பது ஒரு மதசார்பற்ற, அரசியல் அல்லாத, இலாப நோக்கமற்ற, வெளிப்படையான தொண்டு நிறுவனம். இது அயர்லாந்து வாழ் தமிழர்களால், அயர்லாந்தில் வசிக்கும் அனைத்து தமிழர்களையும் “அயர்லாந்து தமிழ்ச் சங்கம்” என்ற ஒரே குடையின் கீழ் ஒருங்கிணைக்க, தமிழ் வருட பிறப்பு தினமான சித்திரை திருநாள் 1ஆம் நாள், 2018 அன்று, நம் தாய்மொழியாம் தமிழ் மொழி பேசும் அனைவரும் இணைந்து செயல்படும் நோக்கில் டப்ளினில் துவக்கப்பட்டது. இது, அயர்லாந்தில் முறைப்படி பதிவு செய்யப்பட்ட, வணிக இலாப நோக்கமற்ற அமைப்பாக செயலாற்றி வருகிறது. அயர்லாந்து தமிழ்ச்சங்கத்தின் குறிக்கோள்:  தமிழர் அனைவரையும் அடையாளம் கண்டு, தமிழ் மொழியால் ஒருங்கிணைந்து அனைத்து மக்களின் ஆதரவுடன் இன நலம் காப்போம்.");
     loadCSS("style.css");
});
});

$(function(){
  $("#en").click(function(){
     $("#hi").text("Ireland Tamil Sangam’s mission is to identify all Tamils, to associate and integrate them with us and act as a shelter to promote the well-being of the community with the support of all people. It's aim is to perpetuate, integrate, and assimilate the cultural heritage of Tamil speaking people into Irish culture.");
     loadCSS("style.css");
});
});

$(function(){
  $("#ta").click(function(){
     $("#wecare").text("நாங்கள் உங்களைப் பற்றி கவலைப்படுகிறோம்.");
     loadCSS("style.css");
});
});

$(function(){
  $("#en").click(function(){
     $("#wecare").text("We care.");
     loadCSS("style.css");
});
});

$(function(){
  $("#ta").click(function(){
     $("#wecaretext").text("அயர்லாந்தில் உள்ள அனைத்து தமிழ் மக்களையும் ஆதரிப்பதே எங்கள் குறிக்கோள்.");
     loadCSS("style.css");
});
});

$(function(){
  $("#en").click(function(){
     $("#wecaretext").text("Our goal is to support all Tamil people in Ireland.");
     loadCSS("style.css");
});
});

$(function(){
  $("#ta").click(function(){
     $("#social").text("எங்கள் சமூக ஊடகத்தைப் பாருங்கள்");
     loadCSS("style.css");
});
});

$(function(){
  $("#en").click(function(){
     $("#social").text("Connect with us on Social Media");
     loadCSS("style.css");
});
});

$(function(){
  $("#ta").click(function(){
     $("#langauge").text("fam");
     loadCSS("style.css");
});
});

$(function(){
  $("#en").click(function(){
     $("#anguage").text("Language");
     loadCSS("style.css");
});
});