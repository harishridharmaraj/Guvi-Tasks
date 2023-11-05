let url = "https://hp-api.onrender.com/api/characters";

let assign = document.getElementById("data");
let array = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

async function getCharacters() {
  var text = "";
  var count = 0;
  var finalCount = 0;
  assign.innerHTML = "";
  let getName = document.getElementById("namee").value;
  let casing = getName.toLowerCase();
  let spaceremover = casing.replaceAll(" ", "");
  for (i = 0; i < spaceremover.length; i++) {
    text = spaceremover[i];
    let counter = array[text];
    count = count + counter;
  }
  let newCount = String(count).split("");

  for (i = 0; i < newCount.length; i++) {
    finalCount += Number(newCount[i]);
  }

  let res = await fetch(url, { method: "GET" });
  let data = await res.json();
  let result = data[finalCount];

  assign.innerHTML = `<div class="col-lg-12 col-sm-12 col-md-12 text-center mt-3">
     <img src=${result.image} alt=${result.image} />
     <h2>${result.name}</h2>
   </div>
   <div class="col-lg-12 col-sm-12 col-md-12 text-start table-responsive">
     <table class="table">
       <tbody>
         <tr>
           <th>Species</th>
           <td>${result.species}</td>
         </tr>
         <tr>
           <th>Gender</th>
           <td>${result.gender}</td>
         </tr>
         <tr>
           <th>House</th>
           <td>${result.house}</td>
         </tr>
         <tr>
           <th>Ancestry</th>
           <td>${result.ancestry}</td>
         </tr>
         <tr>
           <th>Eyecolor</th>
           <td>${result.eyeColour}</td>
         </tr>
         <tr>
           <th>Haircolor</th>
           <td>${result.hairColour}</td>
         </tr>
       </tbody>
     </table>
   </div>`;
}
