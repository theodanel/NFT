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
}

//booking.addEventListener("click", function () {
//  submit();
//
//  console.log(reservationList);
//});
