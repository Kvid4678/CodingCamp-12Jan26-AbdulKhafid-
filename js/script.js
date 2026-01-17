const usernameEl = document.getElementById("username");
const form = document.getElementById("contactForm");
const output = document.getElementById("output");

// === 1. Saat halaman dibuka ===
const savedName = localStorage.getItem("username");

if (savedName) {
  usernameEl.textContent = savedName;
} else {
  usernameEl.textContent = "Guest";
}

// === 2. Saat form di-submit ===
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("messageText").value;

  if (!name || !date || !gender || !message) {
    alert("Please fill all fields!");
    return;
  }

  // Update greeting
  usernameEl.textContent = name;

  // Simpan ke localStorage (WAJIB POIN 4)
  localStorage.setItem("username", name);

  // Tampilkan submitted data
  output.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Gender:</strong> ${gender.value}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // Reset form (opsional)
  form.reset();
});
