let postId = localStorage.getItem("id");
console.log(postId);
let url = "http://localhost:3000/posts";
let blogMain = document.querySelector(".post-cards");

async function fetchPost() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    displayPost(data);
  } catch (error) {
    console.log(error);
  }
}
fetchPost();

function displayPost(post) {
  let tlt = "";
  post
    .filter((el) => el.id == postId)
    .map((post) => {
      tlt += `
      <div class="post-img">
       <img src="${post.img}" alt="">
     </div>
     <div class="post-content">
       <h1>${post.author}</h1>
       <h2>Posted on ${post.date}</h2>
       <h3>${post.title}</h3>
       <h4>${post.category}</h4>
       <h5>${post.description}</h5>
       <h6>${post.description}</h6>
   </div>`;
    });
  blogMain.innerHTML = tlt;
}
