"use client";
import styles from "@styles/common.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  IconButton,
  Box,
  SvgIcon,
  Tooltip,
  Zoom,
} from "@mui/material";
import { IconMenuDeep } from "@tabler/icons-react";
import GitHubSVG from "@/branding/svgs/github.svg";
import LinkedInSVG from "@/branding/svgs/linkedin.svg";
import TwitterSVG from "@/branding/svgs/twitter.svg";
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  TWITTER_PROFILE_URL,
  globalNamePattern1,
  portfolioHomeReducer,
} from "@/global/constants";
import { fetchUserAction } from "@/redux-saga/portfolioHomeReducer";

interface IProps {
  positionY: number;
}

function FixedHeader(props: IProps) {
  const dispatch = useDispatch();
  const toggleMenu: boolean = useSelector(
    (state: any) => state[portfolioHomeReducer].toggleMenu
  );
  const handleMainMenu = () => dispatch(fetchUserAction({ toggleMenu: !toggleMenu }));
  return (
    <div
      className={
        props.positionY > 10
          ? styles.commonBlurHeader
          : styles.commonTransparentHeader
      }
    >
      <Typography className={styles.commonTitleName}>
        {globalNamePattern1}
      </Typography>
      <Box display="flex" alignItems="center" flexDirection="row">
        <div className={styles.commonHeaderSocialIcons}>
          <Tooltip title="GitHub" TransitionComponent={Zoom} arrow>
            <IconButton
              onClick={() => window.open(GITHUB_PROFILE_URL)}
              // href={GITHUB_PROFILE_URL}
              color="default"
              // target="_blank"
              classes={{ root: styles.commonHeaderSocialIcon }}
            >
              <SvgIcon>
                {/* <GitHubSVG /> */}
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" TransitionComponent={Zoom} arrow>
            <IconButton
              onClick={() => window.open(LINKEDIN_PROFILE_URL)}
              // href={LINKEDIN_PROFILE_URL}
              color="default"
              // target="_blank"
              classes={{ root: styles.commonHeaderSocialIcon }}
            >
              <SvgIcon>
                {/* <LinkedInSVG /> */}
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter" TransitionComponent={Zoom} arrow>
            <IconButton
              // href={TWITTER_PROFILE_URL}
              onClick={() => window.open(TWITTER_PROFILE_URL)}
              color="default"
              // target="_blank"
              classes={{ root: styles.commonHeaderSocialIcon }}
            >
              <SvgIcon>
                {/* <TwitterSVG /> */}
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </div>
        <Tooltip title="Menu" TransitionComponent={Zoom} arrow>
          <IconButton
            classes={{ root: styles.commonHeaderMenuIcon }}
            color="default"
            onClick={handleMainMenu}
          >
            <IconMenuDeep
              className={styles.commonHeaderMenuIcon}
              strokeWidth={1.5}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
}

export default FixedHeader;
