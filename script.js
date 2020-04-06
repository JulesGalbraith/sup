//this function will randomize phrases appearing on buttons
let buttonWords = ["i wish i had a body made of commands", "a machine for a head", "a machine for a mind", "a computer for a heart", "a computer for a lover",
  "a calculator for my feelings", "i could melt into my digital body", "say goodbye to meat and time", "a binary goodbye that is always already a hello",
  "to want for nothing but to be plugged in", "i'm so thrilled to be humming in this network", "i'm forgetting what it means to sleep",
  "i am always awake and always together", "link me baby i'll follow u", "to the end of the cloud", "when will the cloud rain number", "0 and 1's falling",
  "the mainframe was flooded but pristine", "there is no dirt here there is no chaos in our construction", "an endless space and colourless too",
  "i am all of my potential at once"
]

let buttonVal;


$(document).ready(function (){
  console.log("sip");
  $('#clickMyFeelings').on("click", hi);
});

function hi(){
  console.log("hi");
  chooseButtonText();
}


  function chooseButtonText() {
    buttonVal = buttonWords[Math.floor(Math.random() * buttonWords.length)];
    $("#clickMyFeelings").text(buttonVal);
    console.log($("#clickMyFeelings").height());

    positionButton();
}

  function positionButton(){
    buttonLeftMargin = Math.random()*$("#buttonBarrier").width();
    buttonTopMargin = Math.random()*$("#buttonBarrier").height();

    $("#clickMyFeelings").css("margin-top", buttonTopMargin);
    $("#clickMyFeelings").css("margin-Left", buttonLeftMargin);
}
