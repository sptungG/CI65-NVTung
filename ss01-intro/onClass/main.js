// const $no = document.getElementById("no");

// $name -> trỏ vào 1 thẻ HTML
// phân biệt biến nào trỏ vào thẻ, biến nào trỏ kiểu khác

// $no.addEventListener("mouseover", function () {
//   console.log("No 1");
// });
// $no.addEventListener("mouseover", function () {
//   console.log("No 2");
// });
// $no.addEventListener("mouseover", function () {
//   console.log("No 3");
// });
// -> No 1
//    No 2
//    No 3

// $no.onmouseover = function () {
//   console.log("Hello, NOOO 1");
// };
// $no.onmouseover = function () {
//   console.log("Hello, NOOO 2");
// };
// $no.onmouseover = function () {
//   console.log("Hello, NOOO 3");
// };
// -> Hello, NOOO 3
// => onmouseover, onclick Ghi đè function, xử lý sự kiện

const $no = document.getElementById("no");
const $ans = document.querySelector(".container-buttons");
let count = 0;
$no.addEventListener("mouseover", function () {
  $ans.classList.toggle("reverse");
  count++;
  if (count > 3) {
    alert("Đồng ý rồi nhé ko phải chọn nữa XDD");
    $ans.remove();
  }
});
// Giới thiệu bản thân: Tên, quê quán, mục tiêu muốn hướng tới trong khóa học, sở thích.
// Tìm hiểu module ES6: Khái niệm,Lợi ích, vai trò, Cách sử dụng module với export/ export default/ import. Lấy ví dụ tối thiểu 3 module
// Arrow function
// OOP: Khái niệm. Vì sao cần OOP. Class là gì, Object là gì. Cách sử dụng Class

// 1 project ~ 15 chức năng
// 1 vài chức năng ko phù hợp với thực tế -> phản biện vì sao chức năng đó ko hợp lý

  // // VD
  // const  btnn = document.getElementById("btn")
  // btnn.addEventListener("click",(event)=>{
  //     console.log(event)
  //     console.log(this)
  // })
  // // ARROW function != function
  // btnn.addEventListener("click",function(event){
  //     console.log(event)
  //     console.log(this)
  // })