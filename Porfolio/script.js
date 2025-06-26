const carousel = document.querySelector('.carousel');

let isDragging = false;
let startX, scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  e.preventDefault();
});

carousel.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});
const stopDragging = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};

carousel.addEventListener('mouseleave', stopDragging);
carousel.addEventListener('mouseup', stopDragging);
carousel.addEventListener('touchend', stopDragging);

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;

  e.preventDefault();});
const pilotInfo = {
  "Max": {
    age: 27,
    nationality: "Holanda",
    stats: "Participacion de GP:219 , Victorias: 65",
    video:src="https://www.youtube.com/embed/igR_31lB7JM?si=hghxehO-3sJ4oNoC" 
  },
  "Tsunoda": {
    age: 25,
    nationality: "Japon",
    stats: "Participacion de GP:97 , Victorias: 0",
    video: src="https://www.youtube.com/embed/fRIf--8p5v0?si=BWVs8kl31mtWplxQ"
  },
  "Lando": {
    age: 26,
    nationality: "Inglaterra",
    stats: "Participacion de GP:128 , Victorias: 4",
    video: src="https://www.youtube.com/embed/AQXY-ZIbJYI?si=rBnoipbP_JAjCURO"
  },
  "Oscar": {
    age: 24,
    nationality: "Australia",
    stats: "Participacion de GP:56 , Victorias: 7",
    video: src="https://www.youtube.com/embed/bQCt7FQj_Kk?si=sz9L4LkqHatddXZh"
  },
  "Hamilton": {
    age: 40,
    nationality: "Inglaterra",
    stats: "Participacion de GP:366 , Victorias: 105",
    video: src="https://www.youtube.com/embed/3w87JAl4qYo?si=W7RjW3HaerNzZEVG"
  },
  "Leclerc": {
    age: 32,
    nationality: "Monaco",
    stats: "Participacion de GP:107 , Victorias: 8",
    video: src="https://www.youtube.com/embed/a6IWDwHC_Yg?si=Q3lTCjb3y_q68Rlb"
  },
  "Rusell": {
    age: 27,
    nationality: "Inglaterra",
    stats: "Participacion de GP:100 , Victorias: 4",
    video: src="https://www.youtube.com/embed/1TEX-4sxlXg?si=8Aljtn_1vSsCjcQj"
  },
  "Antonelli": {
    age: 18,
    nationality: "Italia",
    stats: "Participacion de GP:10 , Victorias: 0",
    video: src="https://www.youtube.com/embed/5mTluOGeRCQ?si=DjIcyCaHebK0r_Cq"
  },
  "Alonso": {
    age: 43,
    nationality: "España",
    stats: "Participacion de GP:414 , Victorias: 32",
    video: src="https://www.youtube.com/embed/-2wb3D4ljKg?si=4jEq9h4GrBMcDPet"
  },
  "Stroll": {
    age: 27,
    nationality: "Canada",
    stats: "Participacion de GP:169 , Victorias: 0",
    video: src="https://www.youtube.com/embed/hOssS46aW4k?si=6ALqNGNZyERsgjAw"
  },
  "Albon": {
    age: 23,
    nationality: "Tailandia",
    stats: "Participacion de GP:81 , Victorias: 0",
    video: src="https://www.youtube.com/embed/ErTa-gVKh0M?si=9u17VxMc6hJar2Wg"
  },
  "Sainz": {
    age: 30,
    nationality: "España",
    stats: "Participacion de GP:219 , Victorias: 4",
    video: src="https://www.youtube.com/embed/ygSIZIiLT3A?si=UuSVWLQ7u5uGj-al"
  },
  "Gasly": {
    age: 29,
    nationality: "Francia",
    stats: "Participacion de GP:164 , Victorias: 1",
    video: src="https://www.youtube.com/embed/njwMIOA991Q?si=weTyeAeSvhEHmBkf" 
  },
  "Colapinto": {
    age: 22,
    nationality: "Argentina",
    stats: "Participacion de GP:10 , Victorias: 0",
    video: src="https://www.youtube.com/embed/0Yzrjo3do7k?si=-3Pha5ItNMkI1Pq6"
  },
  "Ocon": {
    age: 27,
    nationality: "Francia",
    stats: "Participacion de GP:166 , Victorias: 1",
    video: src="https://www.youtube.com/embed/zb1lZzIR9bs?si=uiXgAL4x0UnCgr13"
  },
  "Bearman": {
    age: 19,
    nationality: "Inglaterra",
    stats: "Participacion de GP:10 , Victorias: 0",
    video: src="https://www.youtube.com/embed/vB59qpL39Fw?si=s126Mc1Lv-4SQSwU"
  },
  "Lawson": {
    age: 22,
    nationality: "Australia",
    stats: "Participacion de GP:11 , Victorias: 0",
    video: src="https://www.youtube.com/embed/Dbn4FY-1MGs?si=OcqZZBAdaeLmgqxB"
  },
  "Hadjar": {
    age: 21,
    nationality: "Francia",
    stats: "Participacion de GP:10 , Victorias: 0",
    video: src="https://www.youtube.com/embed/xHxIqJdYhk4?si=Dkg8nWbmRfRtaiXT" 
  },
  "Hulkenberg": {
    age: 37,
    nationality: "Alemania",
    stats: "Participacion de GP:198 , Victorias: 0",
    video: src="https://www.youtube.com/embed/n-smcPEuxz0?si=KAa44pgbGl_xigVP" 
  },
  "Bortoleto": {
    age: 20,
    nationality: "Brasil",
    stats: "Participacion de GP:10 , Victorias: 0",
    video: src="https://www.youtube.com/embed/yDV5Qz_mR3M?si=Daikk7mH8gM7LBzi"}};
  
const pilotDetails = document.getElementById("pilot-details");
const pilotAge = document.getElementById("pilot-age");
const pilotNationality = document.getElementById("pilot-nationality");
const pilotStats = document.getElementById("pilot-stats");
const pilotVideo = document.getElementById("pilot-video");
const pilotCards = document.querySelectorAll(".pilot-card");

pilotCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const pilotId = card.getAttribute("data-pilot");
    const pilot = pilotInfo[pilotId];

    if (pilot) {
      pilotAge.textContent = `Edad: ${pilot.age}`;
      pilotNationality.textContent = `Nacionalidad: ${pilot.nationality}`;
      pilotStats.textContent = `Estadísticas: ${pilot.stats}`;
      pilotVideo.src = pilot.video;
      pilotDetails.style.display = "flex";
    }
  });
  card.addEventListener("mouseout", () => {
  });
});
const playAnthemButton = document.getElementById("play-anthem");
const anthemAudio = document.getElementById("anthem-audio");

playAnthemButton.addEventListener("click", () => {
  if (anthemAudio.paused) {
    anthemAudio.play();
    playAnthemButton.textContent = "⏸ Pausar Himno";
  } else {
    anthemAudio.pause();
    playAnthemButton.textContent = "🎵 Reproducir Himno";
  }
});
