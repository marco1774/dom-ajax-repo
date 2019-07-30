// Write code here to communicate with Github
// const fetch = require("node-fetch");

listRepo("marco1774"); // minotad66 hackermariama
document
  .getElementById("Github-User-btn")
  .addEventListener("click", takeValueInputText);
//--------------------------------------------------------------------

function takeValueInputText() {
  console.log("bottone premuto entrato in funzione");
  user = document.getElementById("Github-User").value;
  listRepo(user);
}

//-----------------------------------------------------------------------------

function listRepo(user) {
  var api = "https://api.github.com/users/" + user + "/repos";

  var a = fetch(api);

  a.then(convObj => convObj.json()).then(objJs => {
    document.getElementById("repos-count").innerHTML = objJs.length; // insert in webpage repo number

    objJs.forEach(element => {
      //   console.log(element.name);
      //   console.log(element.html_url);
      var elementoLista = document.createElement("li");
      // var insertRepoList = document.createTextNode(element.name);
      var repoLink = document.createElement("a");
      var testoLinkRepo = document.createTextNode(element.name);
      repoLink.setAttribute("href", element.html_url);
      repoLink.appendChild(testoLinkRepo);
      // elementoLista.appendChild(insertRepoList);
      elementoLista.appendChild(repoLink);
      document.getElementById("repos-list").appendChild(elementoLista); // add new tag list with repo name
    });
  });
}
