


const reservationList = [];

function submit() {
  let lastname = document.getElementById("lastname").value;
  let firstname = document.getElementById("firstname").value;
  let nights = document.getElementById("nights").value;
  let room = document.getElementById("room").value;
  let breakfast = document.getElementById("breakfast").checked;

  const reservation = {
    firstname: firstname,
    lastname: lastname,
    nights: nights,
    room: room,
    breakfast: breakfast,
  };

  reservationList.push(reservation);
  
  console.log(reservation);
  console.table(reservationList);

  alert("Le client a bien été enregistré")
}


document.getElementById("submitBtn").addEventListener("click", submit);

function price(room, nights, breakfast) {
  let priceRoom;
 

  if (room === "Chambre 1 personne") {
    priceRoom = 65;
  } else if (room === "Chambre 2 personnes") {
    priceRoom = 89;
  } else if (room === "Chambre 4 personnes") {
    priceRoom = 139;
  } else if (room === "Loft") {
    priceRoom = 189;
  } else alert("Erreur dans le calcul du prix de la chambre")

  let priceBreakfast;

if (breakfast) {

  priceBreakfast = 7 * nights;
} else {

  priceBreakfast = 0;
}

  console.log("Prix chambre :", priceRoom);
  console.log("Prix petit-déjeuner :", priceBreakfast);


  return priceBreakfast + (nights * priceRoom);


}

//--------------------------------//


function search() {

  let searchlastname = document.getElementById("searchlastname").value;
  let searchfirstname = document.getElementById("searchfirstname").value;

  let foundReservation = reservationList.find(element =>  {
    return (
      element.lastname === searchlastname &&
      element.firstname === searchfirstname
      );
    ;
  })
  if (foundReservation) {
    let totalPrice = price(foundReservation.room, foundReservation.nights, foundReservation.breakfast);
    alert("Le client : " + foundReservation.firstname + " " + foundReservation.lastname + " doit régler la somme de : " + totalPrice + "euros.");
    console.log("Réservation trouvée", foundReservation);
  } else {
    console.log("Aucune réservation trouvée pour le client :", searchlastname, searchfirstname);
  }
}

document.getElementById("Rechercher").addEventListener("click", search);






