const qrServerBaseUrl = "https://api.qrserver.com/v1/create-qr-code/";

const generateQRCode = () => {
  const qrData = encodeURIComponent(
    document.getElementById("qrDataInput").value
  );
  const qrSize = document.getElementById("qrSizeInput").value;
  const qrImageUrl = `${qrServerBaseUrl}?data=${qrData}&size=${qrSize}`;

  document.getElementById("qrCodeImage").src = qrImageUrl;
};

generateQRCode();

document
  .getElementById("qrDataInput")
  .addEventListener("input", generateQRCode);
document
  .getElementById("qrSizeInput")
  .addEventListener("change", generateQRCode);
