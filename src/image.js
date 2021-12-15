import logo from "./logo.svg";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import im from "./imageinsrc.png";

function Immage() {
  return (
    <div>
      <div style={{ maxWidth: "100vw" }}>
        <h1 class="titlered">Your name here</h1>
        <br />
        <img src={im} alt="src" />
        <br />
        <img src="/imageinpublic.jfif" alt="public" />
      </div>
      <video width="320" height="240" border="solid " controls>
        <source src="Ad Aka Dilovar - Davae.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Immage;
