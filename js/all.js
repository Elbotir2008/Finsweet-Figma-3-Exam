const url = "http://localhost:3000/posts";
let allPostCards = document.getElementById("allPostCards");
let allPostsInput = document.getElementById("allPosts-input");
let paginationBtn1 = document.getElementById("pagination-btn1");
let paginationBtn2 = document.getElementById("pagination-btn2");
async function fetchUsers() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    let sliceData = data.slice(0, 4);
    // console.log(slicePosts);
  } catch (e) {
    console.log(e);
  }
}
fetchUsers();

async function getPostsLimitFive(page, limit = 5) {
  try {
    let res = await fetch(`${url}?_page=${page}&_limit=${limit}`);
    let data = await res.json();
    // console.log(data);
    mapPosts(data);
  } catch (e) {
    console.log(e);
  }
}
getPostsLimitFive(1, (limit = 4));

function mapPosts(posts) {
  let str = "";
  posts.map((post) => {
    str += `
        <div class="allPosts-card flex-class">
          <div class="post-img">
            <img src="${post.img}" />
          </div>
          <div class="post-text">
          <span>${post.category}</span>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
          </div>
        </div>
          `;
    allPostCards.innerHTML = str;
  });
}
allPostsInput.addEventListener("keyup", searchPostsFunc);
function searchPostsFunc() {
  allPostCards.innerHTML = "";
  let text = allPostsInput.value;
  async function getSearchPosts() {
    try {
      let res = await fetch(`${url}?q=${text}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      // console.log(data);
      let sliceData2 = data.slice(0, 4);
      mapPostsTwo(sliceData2);
    } catch (e) {
      console.log(e);
    }
  }
  getSearchPosts();
}
function mapPostsTwo(posts) {
  let txt = "";
  posts.map((post) => {
    txt += `
        <div class="allPosts-card flex-class">
          <div class="post-img">
            <img src="${post.img}" />
          </div>
          <div class="post-text">
          <span>${post.category}</span>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
          </div>
        </div>
          `;
    allPostCards.innerHTML = txt;
  });
}

paginationBtn2.addEventListener("click", nextPosts);
function nextPosts() {
  let page = 2;
  let limit = 4;
  async function getPaginationPosts() {
    try {
      let res = await fetch(`${url}?_page=${page}&_limit=${limit}`);
      let data = await res.json();
      mapPosts3(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  getPaginationPosts();
}
function mapPosts3(posts) {
  let xtx = "";
  posts.map((post) => {
    xtx += `
        <div class="allPosts-card flex-class">
          <div class="post-img">
            <img src="${post.img}" />
          </div>
          <div class="post-text">
          <span>${post.category}</span>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
          </div>
        </div>
          `;
    allPostCards.innerHTML = xtx;
  });
}

paginationBtn1.addEventListener("click", priewPosts);
function priewPosts() {
  let page = 1;
  let limit = 4;
  async function getPaginationPosts2() {
    try {
      let res = await fetch(`${url}?_page=${page}&_limit=${limit}`);
      let data = await res.json();
      mapPosts4(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  getPaginationPosts2();
}
function mapPosts4(posts) {
  let hth = "";
  posts.map((post) => {
    hth += `
        <div class="allPosts-card flex-class">
          <div class="post-img">
            <img src="${post.img}" />
          </div>
          <div class="post-text">
          <span>${post.category}</span>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
          </div>
        </div>
          `;
    allPostCards.innerHTML = hth;
  });
}
