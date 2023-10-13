function check(thecheckbox, thelabel) {
    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
    if (!checkboxvar.checked) {
        labelvar.innerHTML = "No";
    }
    else {
        labelvar.innerHTML = "Yes";
    }
  };


  function funcion(){
    console.log("Probando");
  };