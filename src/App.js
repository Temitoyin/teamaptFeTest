import { useEffect } from "react";
import styles from "./App.module.scss";
import Button from "./components/Button/button";
import CoinPot from "./assets/coinPot.png";
import CoinLeft from "./assets/coinLeft.png";
import CoinRight from "./assets/coinRight.png";
import gsap from "gsap";
import Icon from "./components/Icon/icon";
import InfoBox from "./components/InfoBox/infoBox";
import Navigation from "./components/Navigation/navigation";

function App() {
  useEffect(() => {
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline({ repeat: -1, delay: 0.5 });
    tl1
      .fromTo(
        "#infoBox",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 1,
          opacity: 1,
          duration: 1.4,
        }
      )
      .fromTo(
        ["#coinPot", "#leftCoin", "#rightCoin", "#lightRays", "#button"],
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1.5"
      )
      .fromTo(
        ["#headerTxt1", "#headerTxt2"],
        {
          y: 14,
          opacity: 0,
          duration: 0.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.4,
        },
        "-=1"
      )
      .fromTo(
        ["#subTxt1", "#subTxt2"],
        {
          y: 5,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.4,
        },
        ">-0.2"
      )
      .fromTo(
        ["#leftCoin"],
        {
          y: 0,
        },
        {
          y: 30,
          repeat: -1,
          duration: 3,
          ease: "Elastic.easOut.config(1,0.1)",
          // ease: "slow(0.7, 0.5, false)",
        },
        "-=2"
      )
      .fromTo(
        ["#rightCoin"],
        {
          y: 0,
        },
        {
          y: 30,
          repeat: -1,
          duration: 3,
          ease: "Elastic.easOut.config(1,0.1)",

          // ease: "slow(0.7, 0.5, false)",
        },
        "-=1.8"
      );

    tl2.fromTo(
      [
        "#btm-asset1",
        "#btm-asset2",
        "#btm-asset3",
        "#btm-asset4",
        "#btm-asset5",
        "#btm-asset6",
        "#btm-asset7",
        "#btm-asset8",
        "#btm-asset9",
        "#btm-asset10",
        "#btm-asset11",
      ],
      {
        y: 300,
        opacity: 1,
        stagger: 1,
        duration: 5,
      },
      {
        y: 0,
        stagger: 0.7,
        duration: 10,
        opacity: 0.8,
      }
    );
  }, []);

  return (
    <div className={styles.app}>
      <Navigation />
      <main>
        <div className={styles.app__heading}>
          <h1 id="headerTxt1">
            Unlock to <span>Power</span>
          </h1>
          <h2 id="headerTxt2">
            <span>Power </span>your dreams!
          </h2>
        </div>
        <div className={styles.app__subheading}>
          <h3 id="subTxt1">
            Stand a chance to win <span>N3,000,000</span>{" "}
          </h3>
          <h4 id="subTxt2">everyday for the next 5 days</h4>
        </div>
        <Icon name="star1" className={styles.star1} />
        <Icon name="star2" className={styles.star2} />
        <Icon name="star3" className={styles.star3} />
        <Icon name="star2" className={styles.star4} />
        <Icon name="star4" className={styles.star5} />
        <Icon name="star5" className={styles.star6} />

        <div id="infoBox">
          <InfoBox />
        </div>
        <div id="button">
          <Button />
        </div>
        <div id="bottom">
          <Icon
            name="btm-asset1"
            id="btm-asset1"
            className={styles.btm_asset1}
          />
          <Icon
            name="btm-asset2"
            id="btm-asset2"
            className={styles.btm_asset2}
          />
          <Icon
            name="btm-asset3"
            id="btm-asset3"
            className={styles.btm_asset3}
          />
          <Icon
            name="btm-asset4"
            id="btm-asset4"
            className={styles.btm_asset4}
          />
          <Icon
            name="btm-asset5"
            id="btm-asset5"
            className={styles.btm_asset5}
          />
          <Icon
            name="btm-asset6"
            id="btm-asset6"
            className={styles.btm_asset6}
          />
          <Icon
            name="btm-asset7"
            id="btm-asset7"
            className={styles.btm_asset7}
          />
          <Icon
            name="btm-asset8"
            id="btm-asset8"
            className={styles.btm_asset8}
          />
          <Icon
            name="btm-asset9"
            id="btm-asset9"
            className={styles.btm_asset9}
          />
          <Icon
            name="btm-asset10"
            id="btm-asset10"
            className={styles.btm_asset10}
          />
          <Icon
            name="btm-asset11"
            id="btm-asset11"
            className={styles.btm_asset11}
          />

          <div className={styles.app__coinPot} id="coinPot">
            <img src={CoinPot} alt="coins" />
          </div>
          <img
            className={styles.app__coinLeft}
            src={CoinLeft}
            alt="left coin"
            id="leftCoin"
          />
          <img
            className={styles.app__coinRight}
            src={CoinRight}
            alt="left coin"
            id="rightCoin"
          />

          <div className={styles.app__lightRays} id="lightRays">
            <Icon name="lightRays" className={styles.app__lightRays} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
