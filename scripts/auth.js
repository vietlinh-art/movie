const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const container = document.getElementById("avatar-action-container");

if (currentUser) {
  container.innerHTML = `
    <span style="margin-right:10px;">Xin chào, <b>${currentUser.username}</b></span>
    <button id="logout-btn">Đăng xuất</button>
  `;

  document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    location.href = "./login.html";
  });
} else {
  container.innerHTML = ` 
    <a href="./login.html" id="login-btn">Đăng nhập</a>
  `;
}