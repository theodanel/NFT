


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

function price() {
  let priceRoom;
  

  if (room === "Chambre 1 personne") {
    priceRoom = 65;
  } else if (room === "Chambre 2 personnes") {
    priceRoom = 89;
  } else if (room === "Chambre 4 personnes") {
    priceRoom = 139;
  } else if (room === "Loft") {
    priceRoom === 189;
  } else alert("Erreur dans le calcul du prix de la chambre")

  let totalPrice;
  let priceBreakfast;

  if (breakfast = "oui") {
    priceBreakfast = 7 * nights;
    
    totalPrice = priceBreakfast + (nights * priceRoom)
  } else if (breakfast = "non") {
    totalPrice = nights * priceRoom
  }

  console.log(totalPrice);
}

//--------------------------------//


function search() {

  let searchlastname = document.getElementById("searchlastname").value;
  let searchfirstname = document.getElementById("searchfirstname").value;

  let foundId = reservationList.find(element =>  {
    return (
      element.lastname === searchlastname &&
      element.firstname === searchfirstname
      );
    ;
  })

  if (foundId) {
    let foundReservation = reservationList.find(element => element.id === foundId.id);
      console.log("Réservation trouvée", foundReservation);

  } else {
    console.log("Aucune réservation trouvée pour le client :", searchlastname, searchfirstname);
  }
}

document.getElementById("Rechercher").addEventListener("click", search, price);




