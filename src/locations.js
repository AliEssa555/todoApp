import lahoreImage from "./images/lahore.png";
import islamabadImage from "./images/islamabad.gif";
import karachiImage from "./images/karachi.jpg";
import multanImage from "./images/multan.jpg";

export default function Locations() {
    const locationsElement = document.createElement("div");
    locationsElement.classList.add("locations-container");

    function createLocationImage(src, altText) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = altText;
        img.classList.add("location-image"); // Add a class for further styling
        return img;
    }
    // Create images using the helper function
    const lahoreElement = createLocationImage(lahoreImage, "Lahore Image");
    const islamabadElement = createLocationImage(islamabadImage, "Islamabad Image");
    const karachiElement = createLocationImage(karachiImage, "Karachi Image");
    const multanElement = createLocationImage(multanImage, "Multan Image");

    // Append all images to the container
    locationsElement.append(lahoreElement, islamabadElement, karachiElement, multanElement);

    return locationsElement;
}
