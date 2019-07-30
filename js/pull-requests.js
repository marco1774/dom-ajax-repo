// const fetch = require("node-fetch");

var a = fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls");

a.then(convObj => convObj.json()).then(objJv => {
  objJv.forEach(element => {
    var newNodoLista = document.createElement("li");
    var newNodoListaLink = document.createElement("a");
    var title = document.createTextNode(element.title);
    newNodoListaLink.setAttribute("href", element.html_url);
    newNodoListaLink.appendChild(title);
    newNodoLista.appendChild(newNodoListaLink);
    document.getElementById("pull-requests-list").appendChild(newNodoLista);
  });
});

//**************************************************************************************
document
  .getElementById("myInput")
  .addEventListener("search", filterByUserName1); //addEventListener("search", filterByUserName);

function filterByUserName() {
  var b = fetch(
    "https://api.github.com/repos/codeyourfuture/js-exercises/pulls"
  );

  b.then(convObj1 => convObj1.json()).then(objJv1 => {
    var arrUserLogin = [];
    objJv1.forEach(elem => {
      var buildElemObjForArrUserLogin = {
        utente: elem.user.login,
        titolo: elem.title,
        link: elem.html_url
      };
      arrUserLogin.push(buildElemObjForArrUserLogin);
    });
    var userName = document.getElementById("myInput").value;
    var indexTrovato;
    var indexElemUserName = arrUserLogin.forEach((elem, index) => {
      if (elem.utente === userName) {
        indexTrovato = index;
        console.log("eccolo!! index---> " + index);
      }
    });
    console.log(indexElemUserName);
    document.getElementById("pull-requests-list").innerHTML = `<li><a href="${
      arrUserLogin[indexTrovato].link
    }"> ${arrUserLogin[indexTrovato].titolo}</a></li>`;

    document.getElementById("myInput").value = ""; // reset text input search
  });
}

function filterByUserName1() {
  var c = fetch(
    "https://api.github.com/repos/codeyourfuture/js-exercises/pulls"
  );
  c.then(convObj => convObj.json()).then(objJv => {
    console.log(objJv);
    var userName = document.getElementById("myInput").value; // take value text search input
    var userTrovato = objJv.filter(usr => usr.user.login === userName); // filter by user name in new variable
    if (userTrovato.length === 0) {
      document.getElementById("myInput").value = ""; // reset text input search
      alert("User Name non trovato!!!!");
      return void 0;
    }
    console.log(userTrovato);
    document.getElementById("pull-requests-list").innerHTML = `<li><a href="${
      userTrovato[0].html_url
    }"> ${userTrovato[0].title}</a></li>`;
  });
}
