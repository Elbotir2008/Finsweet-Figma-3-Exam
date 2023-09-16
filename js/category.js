const url = "http://localhost:3000/posts";
let allCatagory = document.getElementById("allCatagory-container");
let allPostsInput2 = document.getElementById("allPosts-input2");

const categoryName = localStorage.getItem("name");
let aaa = categoryName.slice(1, -1);
let topCatigoreSec = document.querySelector(".top");
const catigoryCards = document.querySelector(".cat-cards");

async function fallCatagoryetchPosts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    displayData(data);
    displayPosts(data);
  } catch (error) {
    console.log(error);
  }
}
fallCatagoryetchPosts();
function displayData(post) {
  let ptp = "";
  post
    .filter((el) => el.category == aaa)
    .slice(0, 1)
    .map((el) => {
      ptp += `
    <div class="container">
    <p class="p1">${el.category}</p>
    <p class="p2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore.
    </p>
    <div class="d1">
      <a href="../pages/home.html" class="a1">Home</a>
      <p class="p3">></p>
      <a href="../pages/category.html" class="a1">${el.category}</a>
    </div>
  </div>
    `;
    });
  allCatagory.innerHTML = ptp;
}

function displayPosts(post) {
  let pjp = "";
  post
    .filter((el) => el.category == aaa)
    .map((el) => {
      pjp += `
      <div class="cat-card flex-class">
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
  allCatagory.innerHTML = pjp;
}
allPostsInput2.addEventListener("keyup", searchPostsFunc2);
function searchPostsFunc2() {
  allCatagory.innerHTML = "";
  let text = allPostsInput2.value;
  async function getSearchPosts() {
    try {
      let res = await fetch(`${url}?q=${text}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      let sliceData2 = data.slice(0, 4);
      mapPostsTwo(sliceData2);
    } catch (e) {
      console.log(e);
    }
  }
  getSearchPosts();
}
function mapPostsTwo(posts) {
  let tbt = "";
  posts.map((post) => {
    tbt += `
    <div class="cat-card flex-class">
    <div class="d10"><img src="${post.img}" alt="" class="photo4" /></div>
    <div class="d11">
      <p class="p11">${post.category}</p>
      <a href="../pages/post.html" class="p12" onclick="getId(${post.id})"
        >${post.title}</a
      >
      <p class="p13">
      ${post.description}
      </p>
    </div>
  </div>`;
    allCatagory.innerHTML = tbt;
  });
}
