const songlist = document.querySelector(".songlist");

songlist.addEventListener('wheel', (event) => {
  event.preventDefault();

  songlist.scrollBy({
    left: event.deltaY < 0 ? -60 : 60,
  });
});

const band = document.querySelector("#band");

band.addEventListener('click', (scroll)=>{
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  })
});

const members = document.querySelector("#members");

members.addEventListener('click', (scroll)=>{
  window.scrollTo({
    top: 1600,
    behavior: "smooth"
  })
}); 

const songs = document.querySelector("#songs");

songs.addEventListener('click', (scroll)=>{
  window.scrollTo({
    top: 2800,
    behavior: "smooth"
  })
}); 
