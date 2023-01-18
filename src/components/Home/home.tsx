import "./home.scss";
import CatDogCat from "../../img/CatDogCat.png";
import { FaPaw, FaUserAlt } from "react-icons/fa";
import phoneSite from "../../img/PhoneSite.png";

export function Home() {
  return (
    <>
      <div className="home">
        <div className="homeText">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <h5>
            In at dictum felis. Vestibulum cursus, purus in tincidunt suscipit,
            nibh tellus fringilla enim, eu condimentum tortor nisl sit amet
            augue.
          </h5>
        </div>
        <div className="homeImg">
          <img
            className="CatDogImg"
            src={CatDogCat}
            alt="Two Cats And One Dog"
          />
        </div>
        <div className="UserStats">
          <h3>In nec dapibus massa</h3>
          <div className="statOne">
            <FaPaw fontSize="30px" />
            <h2>+12K</h2>
          </div>
          <hr />
          <div className="statTwo">
            <FaUserAlt fontSize="30px" />
            <h2>+8K</h2>
          </div>
        </div>
        <div className="siteInfo">
          <h1>
            Nunc finibus sit amet
            <br /> nunc ut viverra.
          </h1>
          <div className="sidebysideHome">
            <img className="phoneImg" src={phoneSite} />
            <p>
              Maecenas maximus tristique convallis. Praesent at sodales erat.
              Proin ac posuere eros, et vestibulum diam. Vestibulum dictum
              imperdiet urna vulputate porta. Nunc ultrices quam in dui
              consectetur, a condimentum turpis malesuada. Nam condimentum, elit
              nec varius elementum, dui enim gravida augue, ut pulvinar leo ex
              consectetur risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
