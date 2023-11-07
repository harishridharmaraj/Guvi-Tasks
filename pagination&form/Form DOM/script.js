let loginform = document.getElementById("form");
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let gender = document.querySelector('input[name="gender"]:checked');

  const foodcheck = document.querySelectorAll('input[name="food"]:checked');
  const checkedfood = Array.from(foodcheck).map((checkbox) => checkbox.value);

  if (!gender) {
    alert("Choose your Gender");
    return;
  }

  if (checkedfood.length < 2) {
    alert("Choose atleast 2 food choices");
    return;
  }
  document.getElementById("form").reset();
  let foods = checkedfood.join(", ");

  const newrow = document.getElementById("controw").insertRow(-1);

  newrow.insertCell(0).innerHTML = firstName;
  newrow.insertCell(1).innerHTML = lastName;
  newrow.insertCell(2).innerHTML = address;
  newrow.insertCell(3).innerHTML = pincode;
  newrow.insertCell(4).innerHTML = gender.value;
  newrow.insertCell(5).innerHTML = foods;
  newrow.insertCell(6).innerHTML = state;
  newrow.insertCell(7).innerHTML = country;
});
