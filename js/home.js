const url = "http://localhost:3000/posts";
let homeImg = document.getElementById("homeImg");
let allPosts = document.getElementById("posts");
let cardCatagory = document.getElementById("clickCardCatagory");
let catagoryTxt = document.getElementsByClassName("catagory-txt");
let catagoryCard = document.getElementsByClassName("card");
async function fetchUsers() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    let slicePosts = data.slice(1, 4);
    homeSectionHtml(data);
    mapPosts(slicePosts);
    displayPosts(data);
  } catch (e) {
    console.log(e);
  }
}
fetchUsers();

function homeSectionHtml(users) {
  homeImg.innerHTML = `<img src="${users[0].img}" />`;
}
function mapPosts(posts) {
  let str = "";
  posts.map((post) => {
    str += `
      <a href="../pages/post.html" onclick="getId(${post.id})">
        <div class="post">
        <img src="${post.img}" />
        <span>By <b>${post.author}</b> | ${post.date}</span>
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        </div>
      </a>
        `;
    allPosts.innerHTML = str;
  });
}
function getId(id) {
  localStorage.setItem("id", JSON.stringify(id));
}
const moveCategory1 = document.querySelector(".move1");
const moveCategory2 = document.querySelector(".move2");
const moveCategory3 = document.querySelector(".move3");
const moveCategory4 = document.querySelector(".move4");

let name1 = moveCategory1.textContent;
let name2 = moveCategory2.textContent;
let name3 = moveCategory3.textContent;
let name4 = moveCategory4.textContent;
function getName(name) {
  localStorage.setItem("name", JSON.stringify(name));
}

function displayPosts(post) {
  let rtr = "";
  post
    .filter((el) => el.category == aaa)
    .map((el) => {
      rtr += `
      <div class="cat-card">
      <div class="d10"><img src="${el.img}" alt="" class="photo4" /></div>
      <div class="d11">
        <p class="p11">${el.category}</p>
        <a href="../pages/post.html" class="p12" onclick="getId(${el.id})"
          >${el.title}</a
        >
        <p class="p13">
        ${el.description}
        </p>
      </div>
    </div>
    `;
    });
  catigoryCards.innerHTML = rtr;
}
// localStorage.clear();
