
function showModal(voice) {
    const modal = document.getElementById("voice-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImages = document.getElementById("modal-images");

    let images = [];
    let title = "";

    switch (voice) {
        case "bass":
            title = "Bass Voices";
            images = [
                {src: "images/D.jpg", description: "Davis Maroko ,Director,Song Writer,Married"},
                {src: "images/DJ.jpg", description: "Justine Asoti ,Depute Director,Discipline,married"},
                {src: "images/AN.jpg", description: "Abraham Nyansongo,Spiritual,Married"},
                {src: "images/EP.jpg", description: "Ezra Nyakebondo,Uniform assistant,single"},
                {src: "images/JEFF.jpg", description: "Jeff Omaya,oversite,married"},
                {src: "images/LO.jpg", description: "lewis osoro,Song Writer,Single"},
                
                
               
            ];
            break;
        case "alto":
            title = "Alto Voices";
            images = [
                {src: "images/MN.jpg", description: "Mary nyambeki,Secretary,Single"},
                {src: "images/RO.jpg", description: "Rebecca Onyancha,Task Force,Married"},
                {src: "images/MRC.jpg", description: "Merciline Nyamwaro,Married"},
                {src: "images/NM.jpg", description: "Naom Marasa,single"},
                {src: "images/JN.jpg", description: "Janet Nyamwaya,Single"},
                {src: "images/SA.jpg", description: "Stephany Amondi,Voice Rep,Single"},
                {src: "images/alto2.jpg", description: "Ann Ochenge,Single"},
                {src: "images/DO.jpg", description: "Dalvia Ongeri,Married"},
                {src: "images/SM.jpg", description: "Sharon Mokaya,Single"},
                
            ];
            break;
        case "tenor":
            title = "Tenor Voices";
            images = [
                {src: "images/GO.jpg", description: "Gilbert Onsare,Music Director,Single"},
                {src: "images/NO.jpg", description: "Nathan Oirere,Song Writer,voice Rep,IT,Married"},
                {src: "images/EM.jpg", description:"Elija Ndigiti,Trainer,Single"},
                {src: "images/VS.jpg", description:"Victor Swanya,Treasure,Married"},
                {src: "images/vv.jpg", description:"Finley Nyabochwa,Welfare,Single"},
                

           
            ];
            break;
        case "soprano":
            title = "Soprano Voices";
            images = [
                {src: "images/JJ.jpg", description: "Joan Mong'are,Voice Rep,Single"},
                {src: "images/LIA.jpg", description: "Julia Momanyi,Uniform Head,Married,"},
                {src: "images/EN.jpg", description: "Elizabeth Nyakundi,Single"},
                {src: "images/SO.jpg", description:"Sara onserio,Task Force,Married"},
                {src: "images/EG.jpg", description:"Edina Gichana,Single"},
                {src: "images/BO.jpg", description:"Bathsheba Ombongi,Single"},
                {src: "images/MO.jpg", description: "Moureen Ongeri"},
                {src: "images/UM.jpg", description: "EUnice Moraa,Single"},
                {src: "images/SS.jpg", description: "Shallot Nyagucha,Single"},
                {src: "images/SN.jpg", description: "Sheilla Nyatuka,Single"},
               
            ];
            break;
    }

    modalTitle.textContent = title;
    modalImages.innerHTML = images.map(image => `
        <div class="image-container">
            <img src="${image.src}" alt="${image.description}">
            <p>${image.description}</p>
        </div>
    `).join('');

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("voice-modal");
    modal.style.display = "none";
}


function showAudio() {
    document.getElementById("audio-section").style.display = "block";
    document.getElementById("video-section").style.display = "none";
}

function showVideo() {
    document.getElementById("audio-section").style.display = "none";
    document.getElementById("video-section").style.display = "block";
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function toggleAlbumList(albumId) {
    const album = document.getElementById(albumId);
    album.style.display = album.style.display === 'block' ? 'none' : 'block';
}

function openYouTubeVideo() {
    const videoUrl = "https://www.youtube.com/@crownministers"; 
    window.open(videoUrl, "popup", "width=800,height=600");
}
function showPopup(contentId) {
    const popup = document.getElementById(contentId);
    popup.style.display = 'flex';
}

function closePopup(contentId) {
    const popup = document.getElementById(contentId);
    popup.style.display = 'none';
}
function showPopup(contentId) {
    const popup = document.getElementById(contentId);
    popup.style.display = 'flex';
}

function closePopup(contentId) {
    const popup = document.getElementById(contentId);
    popup.style.display = 'none';
}
