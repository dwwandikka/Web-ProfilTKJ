// Ambil semua tombol detail dan modal
const detailButtons = document.querySelectorAll(".btn-teacher");
const modals = document.querySelectorAll(".modal");

// Fungsi untuk membuka modal
detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    document.getElementById(modalId).classList.add("open");
  });
});

// Fungsi untuk menutup modal
modals.forEach((modal) => {
  const closeButton = modal.querySelector("[data-close]");
  closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  // Tutup modal jika area di luar modal diklik
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
});

// Ambil elemen button "KLIK DI SINI"
const btnJumbotron = document.querySelector('.btn-jumbotron button');
const cardContainer = document.querySelector('.card-container');

// Tambahkan event listener pada button
btnJumbotron.addEventListener('click', () => {
    cardContainer.classList.add('show');
});