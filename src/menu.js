import orderImage from "./images/order.png";
export default function Menu(){
    const menuElement=document.createElement("div");
    menuElement.classList.add("menu-container");

    const imgElement=document.createElement("img");
    imgElement.src=orderImage;
    imgElement.alt = "Menu Image"; // Add alt text for accessibility
    imgElement.style.width="500px";
    imgElement.style.height="auto";

    const menuList = document.createElement("ul");
    const items=["Pizza","Burger","Pulao","biryani"];

    items.forEach(item=>{
        const listItem=document.createElement("li");
        listItem.textContent=item;
        menuList.appendChild(listItem);
    });

    menuElement.appendChild(imgElement);
    menuElement.appendChild(menuList);

    return menuElement;
}