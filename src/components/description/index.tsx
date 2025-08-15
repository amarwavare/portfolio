import styles from "@/branding/scss/journey.module.scss";
import React from "react";
import Typewriter from "typewriter-effect";
import { journeyDescription } from "@/global/constants";

function Description() {
  return (
    <div className={styles.journeyDescription}>
      {journeyDescription.map((value, index: number) => {
        if (index == 1)
          return (
            <Typewriter
              key={index}
              options={{
                autoStart: true,
                loop: true,
                wrapperClassName: styles.journeyText,
                cursorClassName: styles.journeyText,
                skipAddStyles: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(value[0])
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString(value[1])
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString(value[2])
                  .pauseFor(3000)
                  .start();
              }}
            />
          );
        else
          return (
            <div
              key={index}
              className={index == 0 ? styles.journeyText1 : styles.journeyText}
            >
              {value}
            </div>
          );
      })}
    </div>
  );
}

export default Description;
