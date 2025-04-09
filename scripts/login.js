google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { locale: "fr" }
  );

function validateLogin() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") { // เปลี่ยนตามข้อมูลจริง
      window.location.href = "booking.html"; // ไปที่ Funzone
      return false; // ป้องกัน form reload
  } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านผิด!");
      return false;
  }
}