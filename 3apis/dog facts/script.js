// Sample URL
// let url = "https://dog-api.kinduff.com/api/facts?number=10";

// to append
let factCount = document.getElementById("facts");
// data() onClick function
async function data() {
  // to clear the previous data
  factCount.innerHTML = "";
  //   to get value from the input
  let count = document.getElementById("count").value;
  //   to get the data from api using count and url.
  let res = await fetch(
    `https://dog-api.kinduff.com/api/facts?number=${count}`,
    {
      method: "GET",
    }
  );
  let facts = await res.json();
  let newData = facts.facts;
  //   for loop to display the data in a created tags
  for (i = 0; i < newData.length; i++) {
    let p = document.createElement("h4");
    p.innerHTML = `${newData[i]}<hr>`;
    console.log(i, newData[i]);
    factCount.append(p);
  }
}
// Calling the function
data();
