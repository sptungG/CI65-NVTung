import BaseComponent from "./BaseComponent.js";
export default class Navbar extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "Home", href: "./home.html" },
        { name: "About", href: "./about.html" },
        { name: "Contact", href: "./contact.html" },
        { name: "Forum", href: "./forum.html" },
        { name: "Help", href: "./help.html" },
        { name: "Sign In", href: "./sign-in.html" },
        { name: "Sign Up", href: "./sign-up.html" },
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
    
    let $links = this.state.links.map((link) => {
      let $a = document.createElement("a");
      $a.classList.add("nav-link");
      $a.innerHTML = link.name;
      $a.href = link.href;
      return $a;
    });
    // console.log($links);
    $nav.append(...$links);

    $container.append($brand, $nav);

    return $container;

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

    // $ => lưu 1 DOM hoặc lưu nhiều DOM trong 1 mảng
    // let $links = [];
    // for (let link of this.state.links) {
    //     let $a = document.createElement('a');
    //     $a.classList.add('nav-link');
    //     $a.innerHTML = link.name;
    //     $a.href = link.href;

    //     $links.push($a);
    //     // $nav.append($a);
    // }

    // JSX; js and XML
  }
}
