"use client";
import styles from "@styles/common.module.scss";
import React, { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import reduxStore from "@/config/store";
import FixedHeader from "@/components/common/fixedHeader";
import LeftContent from "@/components/common/leftContent";
import UtilService from "@/global/utils/utility.service";
import RightContent from "@/components/common/rightContent";
import { menuPages } from "@/global/constants";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  children: ReactNode;
}

function CommonLayout({ children }: IProps) {
  const utilService = new UtilService();
  const currentPath: string = usePathname();
  const { number, title } = utilService.getPageNumberTitle(currentPath);
  const commonHeaderRef = useRef<HTMLDivElement>(null);
  const [positionY, setPositionY] = useState<number>(0);

  useEffect(() => {
    const element: HTMLDivElement | null = commonHeaderRef.current;
    element?.addEventListener("scroll", listenScrollEvent);
    return () => {
      element?.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = () => {
    const scrollElem: HTMLDivElement | null = commonHeaderRef.current;
    setPositionY(Number(scrollElem?.scrollTop));
  };

  return (
    <Fragment>
      <Provider store={reduxStore}>
        <div
          className={`${inter.className} ${styles.commonWrapperBody}`}
          ref={commonHeaderRef}
        >
          <FixedHeader positionY={positionY} />
          <div className={styles.commonChildComponents}>
            <div className={styles.commonContentWrapRow}>
              <LeftContent number={number} title={title} />
              <div className={styles.commonBodyWrap}>{children}</div>
              <RightContent menuPages={menuPages} currentPath={currentPath} />
            </div>
          </div>
        </div>
      </Provider>
    </Fragment>
  );
}

export default CommonLayout;
