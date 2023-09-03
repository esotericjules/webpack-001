import Heading from "./heading/heading.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV == "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("development mode");
}

helloWorldButton.methoddoesnotexisti();
