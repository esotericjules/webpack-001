import "./aurora-image.scss";

import Aurora from "./aurora-glow.jpg";

class AuroraImage {
  render() {
    const img = document.createElement("img");
    img.src = Aurora;
    img.alt = "Aurora";
    img.classList.add("kiwi-image");

    const bodyDomElement = document.querySelector("body");
    bodyDomElement.appendChild(img);
  }
}

export default AuroraImage;
