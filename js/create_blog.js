let modal = document.getElementById("login-modal");
let login_form = document.getElementById("login_form");
let email = document.getElementById("email");
let password = document.getElementById("password");
modal.style.display = "block";

login_form.addEventListener("submit", (e) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((_user) => {
      console.log("logged in");
      modal.style.display = "none";
      e.preventDefault();
    })
    .catch((_error) => {
      document.getElementById("passwordError").innerText =
        "Password is incorrect";
      password.value = "";
      e.preventDefault();
    });
  e.preventDefault();
});

let blog_form = document.getElementById("blog-form");
let blog_title = document.getElementById("post-title");
let blog_desc = document.getElementById("post-desc");
let blog_author = document.getElementById("author");
let blog_link = document.getElementById("post-link");
let db = firebase.firestore();

blog_form.addEventListener("submit", (e) => {
  console.log("Callback");
  if (blog_title.value && blog_desc.value && blog_link.value) {
    console.table({
      title: blog_title.value,
      desc: blog_desc.value,
      author: blog_author.value,
      link: blog_link.value,
      timestamp: new Date(),
    });
    db.collection("blogs")
      .add({
        title: blog_title.value,
        desc: blog_desc.value,
        author: blog_author.value,
        link: blog_link.value,
        timestamp: new Date(),
      })
      .then(function (docRef) {
        document.getElementById("success").classList.remove("hidden");
        console.log("Document written with ID: ", docRef.id);
        e.preventDefault();
      })
      .catch(function (error) {
        document.getElementById("error").classList.remove("hidden");
        console.error("Error adding document: ", error);
        e.preventDefault();
      });
    e.preventDefault();
  }
});
