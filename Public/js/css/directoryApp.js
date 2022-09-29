let count = 0;
let people = [];
s;
function save(event) {
  const name = document.getElementById("input-name").value;
  const surname = document.getElementById("input-surname").value;
  const phone = document.getElementById("input-phone").value;

  count++;

  const person = { id: count, adi: name, soyadi: surname, tel: phone };
  people.push(person);

  const td = `
  <td class="id">${count}</td>
                    <td class="name">${name}</td>
                    <td class="surname">${surname}</td>
                    <td class="tel">${phone}</td>
                    <td><button class="btn btn-danger" onclick="deletePerson(event,${count})">Sil</button>
                    <button class="btn btn-warning" onclick="updatePerson(event,${count})">Düzenle</button></td> 

   
                    `;
  const tr = document.createElement("tr");
  tr.setAttribute("id", count);

  tr.innerHTML = td;

  if (count == 1) {
    document.getElementById("table-people").innerHTML = "";
  }
  document.getElementById("table-people").appendChild(tr);
}
function deletePerson(event, id) {
  event.target.closest("tr").remove();
  people = people.filter((person) => person.id != id);
}

function updatePerson(event, id) {
  const person = people.filter((person) => (person.id = id));

  document.getElementById("input-name").value = person[0].adi;
  document.getElementById("input-surname").value = person[0].soyadi;
  document.getElementById("input-phone").value = person[0].tel;
  document.getElementById("islemler").innerHTML;
  document
    .getElementById("islemler")
    .setAttribute("onClick", "javascript: update(event," + id + ");");

  var directory = new bootstrap.Modal(document.getElementById("directory"), {
    keyboard: false,
  });
  directory.show();
}

function update(event, id) {
  people.forEach((person) => {
    if (person.id == id) {
      person.adi = document.getElementById("input-name").value;
      person.soyadi = document.getElementById("input-surname").value;
      person.tel = document.getElementById("input-phone").value;
      let tr = document.getElementById(id);
      tr.getElementsByClassName("name")[0].innerHTML = person.adi;
      tr.getElementsByClassName("surname")[0].innerHTML = person.soyadi;
      tr.getElementsByClassName("tel")[0].innerHTML = person.tel;
    }
  });
}
function modalShow(event) {
  document.getElementById("islemler").innerHTML = "Ekle";
  document
    .getElementById("islemler")
    .setAttribute("onClick", "javascript: save(event);");
}
