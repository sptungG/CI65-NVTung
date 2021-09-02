import RegisterScreen from "./screens/RegisterScreen.js";
import LoginScreen from "./screens/LoginScreen.js";

let $app = document.getElementById("app");
$app.append(new LoginScreen().render());
