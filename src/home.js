import lemonImage from "./images/lemon.jpg";

export default function Home() {
    const homeElement=document.createElement("div");
    homeElement.classList.add("home-container");

    const homeImage=document.createElement("img");
    homeImage.src=lemonImage;
    homeImage.alt="Home Image";
    homeImage.classList.add("home-image");

    const homeText=document.createElement("p");
    homeText.classList.add("home-text");
    homeText.textContent="This the homepage";

    homeElement.append(homeImage,homeText);

    return homeElement
}