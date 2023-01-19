import "./contact.scss";

export function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contactInfo">
          <h3>Kontakta oss!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nunc ut viverra tincidunt, nunc felis aliquam nisl, ut
            aliquet massa urna eget nunc. Sed euismod, nunc ut viverra
            tincidunt, nunc felis aliquam nisl, ut aliquet massa urna eget nunc.
            Sed euismod, nunc ut viverra tincidunt, nunc felis aliquam nisl, ut
            aliquet massa urna eget nunc.
          </p>
        </div>
        <form className="contactInfoForm">
          <div className="formDiv">
            <label>Namn:</label>
            <input type="text" placeholder="Namn.." />
          </div>
          <div className="formDiv">
            <label>E-post:</label>
            <input type="text" placeholder="E-post.." />
          </div>
          <div className="formDiv">
            <label>Ämne:</label>
            <input type="text" placeholder="Ämne.." />
          </div>
          <div className="formDiv">
            <label>Meddelande:</label>
            <textarea placeholder="Meddelande.." />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
