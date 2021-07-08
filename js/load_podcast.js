let db = firebase.firestore();
const recentEpisode = document.getElementById("recent-episode");
const pastEpisodes = document.getElementById("past-episodes");
let count = 0;

db.collection("podcasts")
  .orderBy("timestamp", "desc")
  .get()
  .then((snapshots) => {
    snapshots.forEach((doc) => {
      let data = doc.data();
      console.log(data);
      // Make most recent doc take up recent episode slot
      if (count === 0) {
        // Unhide recent episode div
        recentEpisode.classList.remove("hidden");
        recentEpisode.innerHTML += data.embed;
      } else {
        // Unhide past episodes div if there is more than 1 episode
        pastEpisodes.classList.remove("hidden");
        pastEpisodes.innerHTML += data.embed;
      }
      count++;
    });
  });
