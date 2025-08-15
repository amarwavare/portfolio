import styles from "@styles/common.module.scss";
import React from "react";
import { useRouter } from "next/navigation";
import { MENUPAGES } from "@/global/types";

interface IProps {
  menuPages: MENUPAGES[];
  currentPath: string;
}
function RightContent(props: IProps) {
  const router = useRouter();
  const handleNavigate = (url: string) => router.push(url);
  return (
    <div className={styles.rightContent}>
      {props.menuPages.map((value: MENUPAGES, index: number) => {
        let isCurrentPath = value.route == props.currentPath;
        return (
          <div
            key={index}
            className={
              isCurrentPath
                ? styles.rightContentLarge
                : styles.rightContentSmall
            }
            onClick={() => handleNavigate(value.route)}
          >
          </div>
        );
      })}
    </div>
  );
}

export default RightContent;
