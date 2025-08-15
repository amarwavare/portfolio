"use client";
import styles from "@/branding/scss/journey.module.scss";
import React, { Fragment } from "react";
import { Divider } from "@mui/material";
import MainMenu from "@/components/common/mainMenu";
import CommonLayout from "@/layouts/common.layout";
import Description from "@/components/description";
import Timeline from "@/components/timeline";
import Br from "@/components/common/breakLine";

function PortfolioJourneyContainer() {
  return (
    <Fragment>
      <CommonLayout>
        <MainMenu />
        <Description />
        <Br times={6} />
        <div className={styles.journeyDividerWrapper}>
          <Divider
            // variant="dynamic"
            light={true}
            className={styles.journeyDivider}
            classes={{ root: styles.journeyDivider }}
          >
            WORK & EDUCATION
          </Divider>
        </div>
        <Br times={6} />
        <Timeline />
      </CommonLayout>
    </Fragment>
  );
}

export default PortfolioJourneyContainer;
