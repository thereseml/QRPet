import phoneSite from "../../img/PhoneSite.png";
import "./about.scss";

export function About({}) {
  return (
    <div className="siteInfo">
      <h1>
        Nunc finibus sit amet
        <br /> nunc ut viverra.
      </h1>
      <div className="sidebysideHome">
        <img className="phoneImg" src={phoneSite} />
        <p>
          Maecenas maximus tristique convallis. Praesent at sodales erat. Proin
          ac posuere eros, et vestibulum diam. Vestibulum dictum imperdiet urna
          vulputate porta. Nunc ultrices quam in dui consectetur, a condimentum
          turpis malesuada. Nam condimentum, elit nec varius elementum, dui enim
          gravida augue, ut pulvinar leo ex consectetur risus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <hr />
    </div>
  );
}
