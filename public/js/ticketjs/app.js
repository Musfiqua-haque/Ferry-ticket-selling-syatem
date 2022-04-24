function show() {
  var option = document.getElementById("vOption").value;

  if (
    option == "Bus" ||
    option == "Truck" ||
    option == "Microbus" ||
    option == "Motorcycle"
  ) {
    document.getElementById("vInfo").style.display = "block";
    document.getElementById("passInfo").style.display = "none";
    document.getElementById("error").style.display = "none";
    document.getElementById("pTicket").style.display = "none";
    document.getElementById("vTicket").style.display = "block";
  } else if (option == "Passenger") {
    document.getElementById("vInfo").style.display = "none";
    document.getElementById("passInfo").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("pTicket").style.display = "block";
    document.getElementById("vTicket").style.display = "none";
  } else {
    document.getElementById("vInfo").style.display = "none";
    document.getElementById("passInfo").style.display = "none";
    document.getElementById("error").style.display = "inline";
  }
}

// Onchange Option Part End

// Submit and Display Fresult Start

function displayInfo() {
  var vOption = document.getElementById("vOption").value;
  var foption = document.getElementById("foption").value;
  var roption = document.getElementById("roption").value;

  var pName = document.getElementById("pName").value;
  var pPhone = document.getElementById("pPhone").value;
  var vName = document.getElementById("vName").value;
  var vNumber = document.getElementById("vNumber").value;
  var qnt = document.getElementById("qnt").value;
  var date = document.getElementById("date").value;

  document.getElementById('tRoute').innerHTML = roption;
  document.getElementById('VRoute').innerHTML = roption;


  var fWeight = 1000000;
  // document.getElementById("myBtn").style.display="block";
  // check less than 0

  if (vOption == "Passenger") {
    if (qnt <= 0) {
      document.getElementById("qerror").style.display = "inline";
    }
    else {
      document.getElementById("qerror").style.display = "none";
      if (
        pName == "" ||
        pPhone == "" ||
        date == "" ||
        foption == "fnull" ||
        roption == "rnull"
      ) {
        console.log("field must fill up");
      } else {
        document.getElementById("qerror").style.display = "none";
        if (vOption == "vnull") {
          document.getElementById("error").style.display = "inline";
        } 
        else {
          document.getElementById("error").style.display = "none";
          document.getElementById("myBtn").style.display="block";
          console.log(vOption);
          if (vOption == "Bus" || vOption == "Truck") {
            fWeight -= 2 * 10000;
            
          } else if (vOption == "Microbus") {
            fWeight -= 1 * 5000;
          } else if (vOption == "Motorcycle") {
            fWeight -= 1 * 100;
          } else {
            fWeight -= qnt * 65;
            
          }

          if (fWeight > 0 && fWeight <= 1000000) {
              var aBusTruck = Math.floor(fWeight / 10000);
              var aMicro = Math.floor(fWeight / 5000);
              var aMotor = Math.floor(fWeight / 100);
              var aPass = Math.floor(fWeight / 65);
    
              document.getElementById("dBus").innerHTML = aBusTruck;
              document.getElementById("dMicro").innerHTML = aMicro;
              document.getElementById("dMotor").innerHTML = aMotor;
              document.getElementById("dPass").innerHTML = aPass;
            } else {
              playAudio();
            }
        }
      }
    }
  }
  else {
    if (
      vNumber == "" ||
      vName == "" ||
      date == "" ||
      foption == "fnull" ||
      roption == "rnull"
    ) {
      console.log("field must fill up");
    } 
    else {
      document.getElementById("qerror").style.display = "none";
      document.getElementById("myBtn").style.display="block";
      if (vOption == "vnull") {
        document.getElementById("error").style.display = "inline";
      } else {
        document.getElementById("error").style.display = "none";
        if (vOption == "Bus" || vOption == "Truck") {
          fWeight -= 1 * 10000;
        } else if (vOption == "Microbus") {
          fWeight -= 1 * 5000;
        } else if (vOption == "Motorcycle") {
          fWeight -= 1 * 100;
        } else {
          fWeight -= qnt * 65;
        }
        if (fWeight > 0 && fWeight <= 1000000) {
          var aBusTruck = Math.floor(fWeight / 10000);
          var aMicro = Math.floor(fWeight / 5000);
          var aMotor = Math.floor(fWeight / 100);
          var aPass = Math.floor(fWeight / 65);

          document.getElementById("dBus").innerHTML = aBusTruck;
          document.getElementById("dMicro").innerHTML = aMicro;
          document.getElementById("dMotor").innerHTML = aMotor;
          document.getElementById("dPass").innerHTML = aPass;
        } else {
          playAudio();
        }
      }
    }
  }
}

///////////////
const playAudio = (audio) => {
  audio = new Audio("../ticketaudio/sound.wav");
  audio.play();
};

// Submit and Display Fresult End

// Route Option Start

function rshow() {
  var roption = document.getElementById("roption").value;
  console.log(roption);

  if (roption == "Paturia to Doulodia") {
    document.getElementById("A").style.display = "block";
    document.getElementById("B").style.display = "block";
    document.getElementById("C").style.display = "block";
    document.getElementById("A1").style.display = "block";
    document.getElementById("B2").style.display = "block";
    document.getElementById("C2").style.display = "block";
    document.getElementById("A3").style.display = "none";
    document.getElementById("A3").style.display = "none";
    document.getElementById("A3").style.display = "none";
  } else if (roption == "Paturia to Aricha") {
    document.getElementById("A").style.display = "none";
    document.getElementById("B").style.display = "none";
    document.getElementById("C").style.display = "none";
    document.getElementById("A1").style.display = "none";
    document.getElementById("B2").style.display = "none";
    document.getElementById("C2").style.display = "none";
    document.getElementById("A3").style.display = "block";
    document.getElementById("B3").style.display = "block";
    document.getElementById("C3").style.display = "block";
  } else {
    console.log("Select Any Option");
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

btn.onclick = function () {
  var vOption = document.getElementById("vOption").value;
  var roption = document.getElementById('roption').value;
  var foption = document.getElementById('foption').value;
  var pName = document.getElementById('pName').value;
  var pPhone = document.getElementById('pPhone').value;
  // var pSeatName = document.getElementById('pSeatName').value;
  var qnt = document.getElementById('qnt').value;
  var vName = document.getElementById('vName').value;
  var vNumber = document.getElementById('vNumber').value;
  var date = document.getElementById('vNumber').date;

  if(vOption == 'vnull' || roption == ''|| foption == ''){
    console.log("Not Selected Option");
  }
  else{
    if(vOption == 'Passenger')
    {
      if(pName ='' || pPhone == '' || qnt == '' || date == '')
      {

      }
      else
      {
        modal.style.display = "block";
        var tNo = 1000;
        document.getElementById("tNo").innerHTML = tNo;
        document.getElementById("VtNo").innerHTML = tNo;
        document.getElementById("tPname").innerHTML = document.getElementById("pName").value;
        document.getElementById("fName").innerHTML = document.getElementById("foption").value;
        document.getElementById("vFName").innerHTML = document.getElementById("foption").value;
        document.getElementById("tPhone").innerHTML = document.getElementById("pPhone").value;
        // document.getElementById("tSeat").innerHTML = document.getElementById("pSeatName").value;
        document.getElementById("tVname").innerHTML = document.getElementById("vName").value;
        document.getElementById("tVnumber").innerHTML = document.getElementById("vNumber").value;
        document.getElementById('tPqunt').innerHTML = document.getElementById('qnt').value;
        // document.getElementById('sVqunt').innerHTML = document.getElementById('qnt').value;
        document.getElementById("sDate").innerHTML = document.getElementById("date").value;
        document.getElementById("sdDate").innerHTML = document.getElementById("date").value;

        var quantity = document.getElementById("qnt").value;
        document.getElementById("PTprice").innerHTML = quantity * 100;

        var vOption = document.getElementById("vOption").value;
        if (vOption == "Bus" || vOption == "Truck") {
          document.getElementById("VTprice").innerHTML = 1000;
        } else if (vOption == "Microbus") {
          document.getElementById("VTprice").innerHTML = 500;
        } else if (vOption == "Motorcycle") {
          document.getElementById("VTprice").innerHTML = 250;
        }
      }
    }
    else{
      if(vName == '' || vNumber == '')
      {
        
      }
      else
      {
        modal.style.display = "block";
        var tNo = 1000;
        document.getElementById("tNo").innerHTML = tNo;
        document.getElementById("VtNo").innerHTML = tNo;
        document.getElementById("tPname").innerHTML = document.getElementById("pName").value;
        document.getElementById("vFName").innerHTML = document.getElementById("foption").value;
        document.getElementById("tPhone").innerHTML = document.getElementById("pPhone").value;
        // document.getElementById("tSeat").innerHTML = document.getElementById("pSeatName").value;
        document.getElementById("tVname").innerHTML = document.getElementById("vName").value;
        document.getElementById("tVnumber").innerHTML = document.getElementById("vNumber").value;
        document.getElementById('tPqunt').innerHTML = document.getElementById('qnt').value;
        // document.getElementById('sVqunt').innerHTML = document.getElementById('qnt').value;
        document.getElementById("sDate").innerHTML = document.getElementById("date").value;
        document.getElementById("sdDate").innerHTML = document.getElementById("date").value;

        var quantity = document.getElementById("qnt").value;
        document.getElementById("PTprice").innerHTML = quantity * 100;

        var vOption = document.getElementById("vOption").value;
        if (vOption == "Bus" || vOption == "Truck") {
          document.getElementById("VTprice").innerHTML = 1000;
        } else if (vOption == "Microbus") {
          document.getElementById("VTprice").innerHTML = 500;
        } else if (vOption == "Motorcycle") {
          document.getElementById("VTprice").innerHTML = 250;
        }
      }
    }
  }
};

function printPage() {
  var vOption = document.getElementById("vOption").value;

  console.log(vOption);

  if (vOption == "Passenger") {
    let body, printPage;
    body = document.getElementById("body").innerHTML;
    printPage = document.getElementById("pTicket").innerHTML;

    document.getElementById("body").innerHTML = printPage;

    window.print();
    location.replace("newFerry.html");
  } else {
    let body, printPage;
    body = document.getElementById("body").innerHTML;
    printPage = document.getElementById("vTicket").innerHTML;

    document.getElementById("body").innerHTML = printPage;

    window.print();
    location.replace("newFerry.html");
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};