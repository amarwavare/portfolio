import React from "react";
import Fade from 'react-reveal/Fade';
import { introductionParagraphLines } from '@/global/constants';
import styles from '@styles/home.module.scss'

function Introduction() {

  return (
    <React.Fragment>
          <div className={styles.introductionWrapper}>
            <div>
              <div className={styles.introductionHello}>Hello</div>
              <br /> <br />
              <div className={styles.introductionHorizontalDivider}></div>
              <br /> <br />
              <Fade left cascade>
                {introductionParagraphLines.map((value,index) => <p key={index} className={styles.introductionParagraph}>{value}</p>)}
              </Fade>
            </div>
            <div>Image</div> 
          </div>
    </React.Fragment>
  );
}

export default Introduction;
