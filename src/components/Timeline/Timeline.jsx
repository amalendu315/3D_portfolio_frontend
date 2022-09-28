import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Event } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Timelines = ({timelines}) => {
  return (
    <Timeline position="alternate">
      {timelines?.map((timeline, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {timeline?.date?.toString().split("T")[0]}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
                <Event />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent
            sx={{py:"12px", px:2}}
          >
            <Typography variant="h6">{timeline?.title}</Typography>
            <Typography>{timeline?.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Timelines;
