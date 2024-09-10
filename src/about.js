import glassImage from"./images/glass.jpg";

export default function About(){
    const aboutElement=document.createElement("div");
    aboutElement.classList.add("about-container");

    const aboutImage=document.createElement("img");
    aboutImage.src=glassImage;
    aboutImage.alt="About Image";

    const aboutText=document.createElement("p");
    aboutText.textContent="We are a company founded in 2024 to serve food products";

    aboutElement.append(aboutImage,aboutText);

    return aboutElement;
}