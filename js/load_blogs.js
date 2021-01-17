let db = firebase.firestore();
const articles_section = document.getElementById("articles");

db.collection("blogs")
  .orderBy("timestamp", "desc")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let article = document.createElement("div");
      article.className = "article";

      let post_title = document.createElement("h2");
      post_title.innerText = data.title;
      article.appendChild(post_title);

      // post meta data
      let post_meta = document.createElement("div");
      post_meta.className = "meta";

      let meta_img = document.createElement("img");
      meta_img.setAttribute(
        "src",
        `assets/team/${data.author.split(" ")[0].toLowerCase()}.png`
      );
      meta_img.className = "meta-author-img";

      let meta_author = document.createElement("p");
      meta_author.innerText = data.author;

      post_meta.appendChild(meta_img);
      post_meta.appendChild(meta_author);
      article.appendChild(post_meta);

      // desc
      let post_desc = document.createElement("p");
      post_desc.innerHTML = data.desc;
      article.appendChild(post_desc);

      // link
      let post_link = document.createElement("a");
      post_link.classList = ["btn btn-outline-dark"];
      post_link.setAttribute("href", data.link);
      post_link.setAttribute("target", "_blank");
      post_link.innerHTML = `Read Article <i class="fas fa-external-link-alt"></i>`;
      article.appendChild(post_link);

      articles_section.appendChild(article);
    });
  });
