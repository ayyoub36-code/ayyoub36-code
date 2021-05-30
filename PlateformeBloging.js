window.onload = function () {
    loadUser();
}
// recuperer la liste des utilisateurs 


async function loadUser() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let users = await response.json();
    let liste = document.getElementById("listUsers");
    for (let user of users) {
        let option = document.createElement('option');
        option.value = user.id;
        option.innerHTML = user.name;
        liste.appendChild(option);
    }

    // afficher la liste todo 
    // recupere l id de la liste checked value

    let buttonTodo = document.getElementById("loadTodo");

    buttonTodo.addEventListener('click', async function () {
        let userChecked = document.getElementById("listUsers").value;

        // recuperer la liste des todos 

        let responseTodos = await fetch(`https://jsonplaceholder.typicode.com/user/${userChecked}/todos`);
        let todos = await responseTodos.json();
        // boucler sur les todos 

        let ul = document.getElementById("listeTodos");
        ul.addEventListener('change', function () {
            let val = ul.value;
            val.innerHTML = 'null';
        });
        if (ul != "") {
            ul.innerHTML = "";
        }
        for (let todo of todos) {
            console.log(`${todo.title}`);
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = todo.title;
            if ((todo.completed) == true) {
                li.style.color = 'green';
            } else {
                li.style.color = 'red';
            }
        }
    });
}

// recupérer les albums 
let buttonAlbums = document.getElementById("loadAlbums");
buttonAlbums.addEventListener('click', async function () {
    let userChecked = document.getElementById("listUsers").value;
    let responseAlbums = await fetch(`https://jsonplaceholder.typicode.com/user/${userChecked}/albums`);
    let albums = await responseAlbums.json();

    // vider le paragraphe des ablbums 
    let lienPlace = document.getElementById("container")
    if (lienPlace != "") {
        lienPlace.innerHTML = "";
    }
    // boucler et recuperer les title de chaque album
    for (let album of albums) {
        let lien = document.createElement("a");
        lienPlace.appendChild(lien);
        lien.innerHTML = `${album.title}`;
        lien.style.border = '2px solid #FF0000';
        // afficher les photos de chaque album
        lien.onclick = async function () {
            let responsePhotos = await fetch(`https://jsonplaceholder.typicode.com/albums/${userChecked}/photos`);
            let photos = await responsePhotos.json();
            console.log(`${photos}`);

            // vider le paragraphe des photos
            let divPhotos = document.getElementById("photos");
            if (divPhotos != "") {
                divPhotos.innerHTML = "";
            }

            for (let photo of photos) {
                let linkImg = document.createElement('img');
                divPhotos.appendChild(linkImg);
                linkImg.title = photo.title;
                linkImg.src = photo.thumbnailUrl;
                linkImg.style.width = '100px';
                linkImg.style.height = '100px';
                linkImg.onclick = function () {
                    window.open(`${photo.url} , '_blank' `);
                }
            }
        }
    }
});

//---------récupérer les articles et les commentaires---------//

let buttonArticles = document.getElementById("loadArticles");
buttonArticles.addEventListener('click', async function () {
    let userChecked = document.getElementById("listUsers").value;
    let responseArticles = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userChecked}`);
    let articles = await responseArticles.json();
    console.log(articles);
    // vider le paragraphe des articles 
    let divArticles = document.getElementById("articles");
    if (divArticles != "") {
        divArticles.innerHTML = "";
    }


    // ajouter les articles dans la div articles 
    for (let article of articles) {
        let titreArticle = document.createElement('h1');
        titreArticle.innerHTML = article.title;
        titreArticle.style.position = 'center';
        divArticles.appendChild(titreArticle);

        // article body

        let bodyArticle = document.createElement('div');
        bodyArticle.innerHTML = article.body;
        bodyArticle.style.fontSize = "18px";
        bodyArticle.style.fontFamily = 'cursive';
        divArticles.appendChild(bodyArticle);

        let responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${article.id}`);
        let comments = await responseComments.json();
        console.log(comments);
        // ajouter les commentaires 
        for (comment of comments) {
            let commsArticles = document.createElement('p');
            // style css 
            commsArticles.style.border = "3px solid #FF5833 ";
            commsArticles.style.borderRadius = "15px 15px 15px 15px"
            commsArticles.style.backgroundColor = "#33FFC0 ";
            commsArticles.style.width = '750px';
            commsArticles.style.marginLeft = '250px'
            //commsArticles.style.display = 'block';
            commsArticles.style.padding = '10px';
            bodyArticle.appendChild(commsArticles);

            // creer des paragraphe pour ajouter l'infos commentaires

            let pName = document.createElement('span');
            commsArticles.appendChild(pName);
            pName.innerHTML = `Nom : ${comment.name}`;
            pName.style.display = 'block';

            let pEmail = document.createElement('span');
            commsArticles.appendChild(pEmail);
            pEmail.innerHTML = `Email : ${comment.email}`;

            let pBody = document.createElement('span');
            commsArticles.appendChild(pBody);
            pBody.style.display = 'block';
            pBody.innerHTML = `Commentaire : ${comment.body}`;

        }
    }
});