export default function Home() {

  
  
  function questions() {
    var confirmBuggy = window.confirm("Do you prefer a buggy chassis?");
    var confirmTruck = window.confirm("Do you prefer a truggy chassis?");
    var confirmTrophy = window.confirm("Do you prefer a trophy truck chassis?");
    var confirmOffwheel = window.confirm("Do you prefer offroad tires?")
    var confirmOnwheel = window.confirm("Do you prefer onroad tires?")
    var confirmNickl= window.confirm("Do you prefer a brushed motor, Nickl battery set up?")
    var confirmLipo = window.confirm("Do you prefer a brushless motor, Lipo battery set up?")
    
    
    // body choice
    
    if (confirmOffwheel) {
      alert("Good choice!, offroad tires it is.");
      carContO();
    }
    else if (confirmOnwheel) {
      alert("Good choice!, onroad tires it is.");
    }
    else {
      alert("bad news!, your car has no wheels. :(");
    }
    

    function carContO() {
      if (confirmNickl) {
        alert("Awesome!, brushed Nickl setup it is.");
        carCont3B();
      }
      else if (confirmLipo) {
        alert("Awesome!, brushless Lipo setup it is.");
        carCont3L();
      }
      else {
        alert("bad news!, your car has no power. :(");
      }
    }


    function carCont3B() {
      if (confirmBuggy) {
        alert("Great!, you chose the buggy.");
        carFinal1B();
      }
      else if (confirmTruck) {
        alert("Great!, you chose the truggy.");
        carFinal2B();
      }
      else if (confirmTrophy){
        alert("Great!, you chose the trophy truck.");
        carFinal3B();
      }
      else {
        alert("You need a hobby.")
      }
    }

    function carCont3L() {
      if (confirmBuggy) {
        alert("Great!, you chose the buggy.");
        carFinal1L();
      }
      else if (confirmTruck) {
        alert("Great!, you chose the truggy.");
        carFinal2L();
      }
      else if (confirmTrophy){
        alert("Great!, you chose the trophy truck.");
        carFinal3L();
      }
      else {
        alert("You need a hobby.")
      }
    }

    function carFinal1B() {
      alert("Your reccomended car is the Traxxas Bandit(Brushed) w/ offroad wheels.")
    }

    function carFinal2B() {
      alert("Your reccomended car is the Traxxas Rustler(Brushed) w/ offroad wheels.")
    }

    function carFinal3B() {
      alert("Your reccomended car is the Traxxas Slash(Brushed) w/ offroad wheels.")
    }

    //Switch

    function carFinal1L() {
      alert("Your reccomended car is the Traxxas Bandit(Brushless) w/ offroad wheels.")
    }

    function carFinal2L() {
      alert("Your reccomended car is the Traxxas Rustler(Brushless) w/ offroad wheels.")
    }

    function carFinal3L() {
      alert("Your reccomended car is the Traxxas Slash(Brushless) w/ offroad wheels.")
    }

  }

  return(
    
    <div>
        <button type="submit" value="begin" onClick={questions}>Get Car Reccomendation</button>
    </div>
  )
  
}