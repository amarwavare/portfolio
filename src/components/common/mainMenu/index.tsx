"use client";
import styles from "@/branding/scss/common.module.scss";
import React from "react";
import { useRouter } from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop } from "@mui/material";
import { menuPages, portfolioHomeReducer } from "@/global/constants";
import { fetchUserAction } from "@/redux-saga/portfolioHomeReducer";
import { MENUPAGES } from "@/global/types";
import {Dispatch, UnknownAction} from "redux";

function MainMenu(): React.ReactElement<any, any> {
  const router: AppRouterInstance = useRouter();
  const dispatch: Dispatch<UnknownAction> = useDispatch();
  const toggleMenu = useSelector((state: any) => state[portfolioHomeReducer].toggleMenu);
  const handleMainMenu = () => dispatch(fetchUserAction({ toggleMenu: !toggleMenu }));
  const handleNavigate = (route: string) => router.push(route);
  return (
    <Backdrop
      open={toggleMenu}
      onClick={handleMainMenu}
      classes={{ root: styles.mainMenuDrawer }}
    >
      {menuPages.map((value: MENUPAGES, index: number) => (
        <a
          onClick={(): void => handleNavigate(value.route)}
          key={index}
          className={styles.commonMenuButtons}>
          {value.label}
        </a>
      ))}
    </Backdrop>
  );
}

export default MainMenu;
