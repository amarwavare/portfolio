import styles from "@/branding/scss/journey.module.scss";
import React from "react";
import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { IconBriefcase } from "@tabler/icons-react";
import { journeyRoadmap } from "@/global/constants";

function TimelineJourney() {
  return (
    <div className={styles.journeyTimeline}>
      <Timeline position="alternate">
        {journeyRoadmap
          .map((value, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                className={styles.journeyDescriptionText}
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
              >
                {value?.fromTo || " - "}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  {value?.icon || <IconBriefcase color="black" />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={styles.timelineContent} sx={{ px: 2 }}>
                <Typography
                  className={styles.journeyDescriptionTitle}
                  variant="h6"
                  component="span" 
                  onClick={() => window.open(value.url, '_blank')}
                >
                  {value?.at || " - "}
                </Typography>
                {value?.as && (
                  <Typography
                    className={styles.journeyDescriptionAs}
                    variant="subtitle2"
                  >
                    {value?.as}
                  </Typography>
                )}
                {value.description.map((descriptionValue, descriptionIndex) => (
                  <Typography
                    key={descriptionIndex}
                    className={styles.journeyDescriptionText}
                    dangerouslySetInnerHTML={{
                      __html: descriptionValue || " - ",
                    }}
                  ></Typography>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))
          .reverse()}
      </Timeline>
    </div>
  );
}

export default TimelineJourney;
