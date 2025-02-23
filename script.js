// Daftar kata-kata romantis
const romanticWords = [
    "Aku mencintaimu ❤️",
    "Kamu adalah bintangku ✨",
    "Selalu ada untukmu 💕",
    "Cinta sejati adalah kamu 💖",
    "Hatiku hanya untukmu 🌹",
    "Kamu adalah alasan senyumanku 😊",
    "Tanpamu, hidupku hampa 🌙",
    "Setiap detik bersamamu berharga ⏳",
    "Kamu adalah mimpiku yang jadi nyata 🌟",
    "Cintaku padamu tak terbatas 🌌",
    "Kamu adalah cahaya dalam hidupku 💫",
    "Hanya kamu yang aku inginkan 💞",
    "Kamu membuatku percaya pada cinta 💌",
    "Aku selalu memikirkanmu 💭",
    "Kamu adalah segalanya bagiku 💝",
    "Cintaku padamu seperti lautan tanpa ujung 🌊",
    "Kamu adalah belahan jiwaku 💓",
    "Setiap hari bersamamu adalah anugerah 🙏",
    "Kamu adalah puisi dalam hidupku ✒️",
    "Cinta kita adalah kisah abadi 📜"
];

// Fungsi untuk membuat bubble chat
function createBubble() {
    const bubbleContainer = document.getElementById('bubble-container');

    // Buat elemen bubble
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = romanticWords[Math.floor(Math.random() * romanticWords.length)];

    // Atur posisi acak
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    // Tambahkan bubble ke container
    bubbleContainer.appendChild(bubble);

    // Hapus bubble setelah beberapa detik
    setTimeout(() => {
        bubble.remove();
    }, 5000); // Bubble akan hilang setelah 5 detik
}

// Fungsi untuk membuat love yang berjatuhan
function createFallingLove() {
    const loveSection = document.getElementById('love-section');

    // Buat elemen love
    const love = document.createElement('div');
    love.classList.add('love');
    love.textContent = '❤️';

    // Atur posisi acak
    const x = Math.random() * window.innerWidth;
    love.style.left = `${x}px`;

    // Atur durasi animasi acak
    const duration = Math.random() * 5 + 3; // Durasi antara 3-8 detik
    love.style.animationDuration = `${duration}s`;

    // Tambahkan love ke section
    loveSection.appendChild(love);

    // Hapus love setelah animasi selesai
    setTimeout(() => {
        love.remove();
    }, duration * 1000);
}

// Jalankan fungsi createBubble setiap 1 detik
setInterval(createBubble, 1000);

// Jalankan fungsi createFallingLove setiap 0.5 detik
setInterval(createFallingLove, 500);
// Fungsi untuk menyesuaikan ukuran frame berdasarkan aspek rasio video
function adjustFrameAspectRatio(videoElement, frameElement) {
    const videoWidth = videoElement.videoWidth;
    const videoHeight = videoElement.videoHeight;

    // Hitung aspek rasio video
    const aspectRatio = videoWidth / videoHeight;

    // Tetapkan ukuran frame berdasarkan aspek rasio video
    const frameWidth = frameElement.offsetWidth;
    const frameHeight = frameWidth / aspectRatio;

    frameElement.style.height = `${frameHeight}px`;
}

// Panggil fungsi setelah video dimuat
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.querySelector('.vertical-video');
    const frameElement = document.querySelector('.video-frame');

    videoElement.addEventListener('loadedmetadata', () => {
        adjustFrameAspectRatio(videoElement, frameElement);
    });
});