import corolla from "../src-assets/corolla.jpg";
import mazda from "../src-assets/mazda.jpg";
import honda from "../src-assets/honda.jpg";

export default function Body() {
  return (
    <div className={["body"]}>
      <div className={["body__upper"]}>
        <h1>Check out our range of second hand vehicles!</h1>
      </div>
      <div className={["body__tiles"]}>
        <div className={["body__tiles--hatch"]}>
          <img src={corolla} alt="corolla" />
          <p>Hatchbacks</p>
        </div>
        <div className={["body__tiles--sedan"]}>
          <img src={mazda} alt="mazda" />
          <p>Sedans</p>
        </div>
        <div className={["body__tiles--suv"]}>
          <img src={honda} alt="honda" />
          <p>SUVs</p>
        </div>
      </div>
      <div className={["body__chatbot"]}>
        <df-messenger
          chat-icon="https:&#x2F;&#x2F;content.tgstatic.co.nz&#x2F;webassets&#x2F;globalassets&#x2F;search-wizard&#x2F;search-wizard-tina-mobile-v2.png"
          intent="WELCOME"
          chat-title="e-Tina"
          agent-id="276d2da5-7b31-44cc-a06e-56b9096e9e4c"
          language-code="en"
        ></df-messenger>
      </div>
    </div>
  );
}
