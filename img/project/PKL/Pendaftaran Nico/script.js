const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const btnLogin = document.querySelector(".btn");

// Menambahkan event listener pada tombol btnLogin-popup
const btnLoginPopup = document.querySelector(".btnLogin-popup");
btnLoginPopup.addEventListener("click", () => {
  // Mengambil semua elemen dengan kelas 'isi'
  const isiElements = document.querySelectorAll(".isi");
  // Menggunakan forEach untuk menyembunyikan setiap elemen
  isiElements.forEach((element) => {
    element.style.display = "none"; // Menyembunyikan elemen
  });
});

// pergantian ke register
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

// pergaintian ke login
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// memunculkan
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

// untuk close
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");

  // Menampilkan kembali elemen 'isi'
  const isiElements = document.querySelectorAll(".isi");
  isiElements.forEach((element) => {
    element.style.display = "block"; // Menampilkan kembali elemen
  });
});

// untuk login
btnLogin.addEventListener("click", () => {
  window.location.href = "form_siswa.html";
});
