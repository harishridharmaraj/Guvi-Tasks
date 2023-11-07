let url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

let pages = document.getElementById("pages");
let dataTable = document.getElementById("dataTable");
let perPage = 10;
let prev = document.createElement("button");
prev.textContent = "previous";
prev.className = "btn btn-primary d-flex justify-content-center";

pages.appendChild(prev);

let nextbutton = document.createElement("button");
nextbutton.textContent = "next";
nextbutton.className = "btn btn-primary d-flex justify-content-center";

pages.appendChild(nextbutton);

async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  let newData = [];
  var pageCount = data.length / perPage;

  function alertss(i) {
    dataTable.innerHTML = "";
    let getid = i;
    // console.table(data.slice(getid * perPage - 10, getid * perPage));
    for (var i = (getid - 1) * perPage; i < getid * perPage; i++) {
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>`;
      dataTable.append(tr);
      // console.table(i, data[i].id, data[i].name, data[i].email);
    }
    function previous() {
      if (getid > 1) getid--;
      alertss(getid);
    }
    prev.addEventListener("click", function () {
      previous();
    });
    nextbutton.addEventListener("click", function () {
      nextt();
    });
    function nextt() {
      if (getid > 0) getid++;
      alertss(getid);
    }
  }
  alertss(1);

  let first = document.createElement("button");
  first.textContent = "first";
  first.className = "btn btn-primary d-flex justify-content-center";

  first.addEventListener("click", function () {
    alertss(1);
  });
  pages.appendChild(first);
  for (i = 1; i <= pageCount; i++) {
    var button = document.createElement("button");
    button.className = "btn btn-primary d-flex justify-content-center";
    button.id = "buttons";
    button.value = i;
    button.textContent = i;
    button.addEventListener("click", function () {
      alertss(this.value);
    });

    pages.appendChild(button);
  }

  let last = document.createElement("button");
  last.textContent = "last";
  last.className = "btn btn-primary d-flex justify-content-center";

  last.addEventListener("click", function () {
    alertss(i - 1);
  });
  pages.appendChild(last);
}

getData();
