import { Howitwork } from "./../Howitwork/howitwork";
import { About } from "../About/about";
import "./home.scss";
import CatDogCat from "../../img/CatDogCat.png";
import { FaPaw, FaUserAlt } from "react-icons/fa";

export function Home() {
  return (
    <>
      <div className="home">
        <div className="homeHero">
          <div className="homeText">
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <h5>
              In at dictum felis. Vestibulum cursus, purus in tincidunt
              suscipit, nibh tellus fringilla enim, eu condimentum tortor nisl
              sit amet augue.
            </h5>
          </div>
          <div className="homeImg">
            <img
              className="CatDogImg"
              src={CatDogCat}
              alt="Two Cats And One Dog"
            />
          </div>
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
        <About />
        <Howitwork />
      </div>
    </>
  );
}
