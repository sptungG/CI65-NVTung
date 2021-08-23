import Navbar from "./Navbar.js";

// $ => biến lưu DOM, lưu 1 hoặc nhiều DOM trong 1 mảng
// _ => lưu những component

let $app = document.getElementById("app");

let _navbar = new Navbar();

$app.append(_navbar.render());
