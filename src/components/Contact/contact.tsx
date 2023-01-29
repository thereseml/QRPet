import { useEffect, useState } from "react";
import "./contact.scss";
import { data } from "./QandA";

export function Contact() {
  // state för visa/dölja svaren
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <div className="contact">
        <div className="contactInfo">
          <h3>Behöver du hjälp eller har frågor? Kontakta oss idag!</h3>
          <p>
            Om du har frågor eller behöver hjälp med vår service, tveka inte att
            kontakta oss. Vi är här för att hjälpa dig och se till att din
            upplevelse på vår hemsida är så lätt och problemfri som möjligt.
          </p>
          <p>
            Vi försöker alltid svara så snabbt som möjligt, men om du inte får
            svar inom 24 timmar, vänligen skicka ett e-postmeddelande igen eller
            ring oss.
          </p>
          <p>
            Tack för att du väljer QR Pet. Vi ser fram emot att höra från dig.
          </p>
        </div>
        <form className="contactInfoForm">
          <div className="formDiv">
            <label>Namn:</label>
            <input type="text" placeholder="Namn.." />
          </div>
          <div className="formDiv">
            <label>E-post:</label>
            <input type="text" name="email" placeholder="E-post.." />
          </div>
          <div className="formDiv">
            <label>Ämne:</label>
            <input type="text" placeholder="Ämne.." />
          </div>
          <div className="formDiv">
            <label>Meddelande:</label>
            <textarea placeholder="Meddelande.." />
          </div>
          <button type="submit">Skicka!</button>
        </form>
      </div>
      <div className="FAQ">
        <h4>FAQ</h4>
        {data.map((item, i) => {
          return (
            <div key={i} className="FAQitem">
              <div className="questionDiv" onClick={() => toggle(i)}>
                <h5>{item.question}</h5>
                <button className="anwserBtn">
                  {selected === i ? "-" : "+"}
                </button>
              </div>
              <div className={selected === i ? "anwser.show" : "anwser"}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
