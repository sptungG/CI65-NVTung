function getCorrectAnswer(ans) {
  const $ans = document.getElementById(ans);
  let count = 0;
  $ans.addEventListener("mouseover", function () {
    $ans.style.background = "#3f5efb";
    $ans.style.color = "#fff";
    $ans.style.border = "0";
    $ans.parentNode.classList.toggle("reverse");
    count++;
    if (count > 3) {
      alert("Đồng ý rồi nhé ko phải chọn nữa XDD");
      $ans.parentNode.remove();
      // after 3s -> Reset
      setTimeout(function () {
        location.reload();
      }, 3000);
    }
  });
}
export { getCorrectAnswer };




