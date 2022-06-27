function footSfx() {
  var footSfx = new Audio("./sounds/Angry.mp3");
  footSfx.play();
}

let playerData = [
  {
    jersey: "00",
    player: "Angelo",
    position: "F/C",
    height: "2.24 m",
    weight: "136 kg"
  },
  {
    jersey: "00",
    player: "Ethan",
    position: "G/F",
    height: "2.16 m",
    weight: "124 kg"
  },
  {
    jersey: "00",
    player: "Marcus",
    position: "G/F",
    height: "2.11 m",
    weight: "104 kg"
  },
  {
    jersey: "00",
    player: "Marvin",
    position: "G/F",
    height: "2.16 m",
    weight: "127 kg"
  },
  {
    jersey: "00",
    player: "Rodrigo",
    position: "F/C",
    height: "2.26 m",
    weight: "145 kg"
  },
  {
    jersey: "00",
    player: "Thady",
    position: "G/F",
    height: "2.11 m",
    weight: "113 kg"
  },
];


window.onload = () => {
  loadTableData(playerData);
}

loadTableData(playerData);

function loadTableData(playerData) {
  const tableBody = document.getElementById("rosterTableData");
  let dataIndex = "";

  for(let p of playerData) {
    dataIndex += `<tr>
                    <td>${p.jersey}</td>
                    <td>${p.player}</td>
                    <td>${p.position}</td>
                    <td>${p.height}</td>
                    <td>${p.weight}</td>
                  </tr>`;
    //console.log(dataIndex);
    tableBody.innerHTML = dataIndex;
  }
}

function sortTableByColumn(table, column, asc=true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  const sortedRows = rows.sort((a, b) => {
    const aColText = a.querySelector(`td:nth-child(${column+1})`).textContent.trim();
    const bColText = b.querySelector(`td:nth-child(${column+1})`).textContent.trim();

    return aColText > bColText ? (1*dirModifier) : (-1*dirModifier)
  });

  while(tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  tBody.append(...sortedRows);

  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${column+1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${column+1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");

    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});