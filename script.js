function displayRandomTextAndImage() {
  const name = document.getElementById("nameInput").value;
  if (name === "") {
    alert("Masukkan nama Anda terlebih dahulu!");
    return;
  }
  const items = [
    { text: "Kodok Zuma", img: "F:/Khodam/kodok_zuma.jpg" },
    { text: "Kucing Jelek", img: "F:/Khodam/kucing_jelek.jpg" },
    { text: "Uni Bakwan", img: "F:/Khodam/unibakwan.jpg" },
    { text: "Sprei Emyu", img: "F:/Khodam/sprei_MU.jpg" },
    { text: "Babi Guling", img: "F:/Khodam/babi_guling.jpg" },
    { text: "Kuda Tonggos", img: "F:/Khodam/kuda.jpg" },
    { text: "Tong Sampah IKEA", img: "F:/Khodam/tong_sampah.jpg" },
    { text: "Kentang Bloon", img: "F:/Khodam/kentang_bloon.jpg" },
    { text: "Kelinci Alaska", img: "F:/Khodam/kelinci_alaska.png" },
    { text: "Lampu Taman", img: "F:/Khodam/lampu_taman.jpg" },
    { text: "Wayang Biru", img: "F:/Khodam/wayang_biru.jpg" },
    { text: "Tempe Gosong", img: "F:/Khodam/tempe_gosong1.jpg" },
    { text: "Bunga Bangke", img: "F:/Khodam/bunga_bangke.jpg" },
    { text: "Balveer", img: "F:/Khodam/balveer.jpg" },
    { text: "Tusukan Sate", img: "F:/Khodam/tusukan_sate.jpg" },
    { text: "Gayung Lope", img: "F:/Khodam/gayung.jpg" },
    { text: "SingKong", img: "F:/Khodam/singkong.jpg" },
    { text: "Motor Anggora", img: "F:/Khodam/motor_anggora.jpg" },
  ];
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];
  document.getElementById("displayText").innerText =
    name + ", Khodam Anda adalah: " + randomItem.text;

  const displayImage = document.getElementById("displayImage");
  displayImage.src = randomItem.img;
  displayImage.alt = randomItem.text;

  displayImage.style.display = "block";

  if (randomItem.img === "") {
    displayImage.style.display = "none";
  }
}
