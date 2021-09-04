import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import { appendTo } from "./models/utils.js";

let $app = document.getElementById("app");
appendTo($app, new RegisterScreen());

// $app.append(new LoginScreen().render());

/**
 * Cũ.
  //BaseComponent.js
  setState(newState) {
    this.state = newState;
    this.render();
  }
 * Khi thay đổi state thì sẽ p render lại. Nhưng mà lại ko hiển thị đc ra ngoài
  
  Cũ.
  //app.js
  $app.append(new RegisterScreen().render());
  -> ctr chỉ render 1 lần duy nhất, còn những lần gọi sau .render() nó ko chạy.
  kể cả khi gọi setSate nó vẫn chỉ hiển thị trạng thái đầu tiên khi mà render ra

  Mới.
  //BaseComponent.js
    setState(newState) {
    this.state = newState;
    this.refresh();
  } 
  => refresh() bất kì khi nào component thay đổi state thì sẽ tiễn hành chạy lại phần render,
   tiến hành thay đổi giao diện trên màn hình tương ứng với state của nó

  Mới. 
  //app.js
  appendTo($app, new RegisterScreen());

  //utils.js
  appendTo($element, ...components) append components vào $element, bổ trợ cho refresh()
 */
