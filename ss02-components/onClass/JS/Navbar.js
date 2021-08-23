import BaseComponent from "./BaseComponent.js";
export default class Navbar extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { href: "./home.html", name: "Home" },
        { href: "./about.html", name: "About" },
        { href: "./contact.html", name: "Contact" },
        { href: "./signin.html", name: "Sign in" },
        { href: "./signup.html", name: "Sign up" },
      ],
    };
  }

  render() {
    let $container = document.createElement("nav");
    $container.classList.add("navbar");

    let $brand = document.createElement("a");
    $brand.href = "#";
    $brand.classList.add("navbar-brand");
    $brand.innerHTML = "App";

    let $nav = document.createElement("div");
    $nav.classList.add("navbar-nav");

    // let $home = document.createElement("a");
    // $home.href = "./home.html";
    // $home.classList.add("navbar-link");
    // $home.innerHTML = "Home";

    // let $about = document.createElement("a");
    // $about.href = "./about.html";
    // $about.classList.add("navbar-link");
    // $about.innerHTML = "About";

    // let $contact = document.createElement("a");
    // $contact.href = "./contact.html";
    // $contact.classList.add("navbar-link");
    // $contact.innerHTML = "Contact";
    
    // $nav.append($home, $about, $contact);
    
    // for (const link of this.state.link) {
    //   let $a = document.createElement("a");
    //   $a.classList.add("nav-link");
    //   $a.innerHTML = link.name;

    // }
    let $links = this.state.links.map((link) => {
      let $a = document.createElement("a");
      $a.classList.add("nav-link");
      $a.innerHTML = link.name;
      $a.href = link.href;
      return $a;
    });
    console.log($links);
    $nav.append(...$links);

    $container.append($brand, $nav);

    return $container;

    // JSX; js and XML
  }
}
