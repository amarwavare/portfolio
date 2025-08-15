"use client";
import React, { Fragment } from "react";
import Introduction from "@/components/introduction/introduction";
import MainMenu from "@/components/common/mainMenu";

function PortfolioHomeContainer() {
  return (
    <Fragment>
      <MainMenu />
      <Introduction />
    </Fragment>
  );
}

export default PortfolioHomeContainer;
