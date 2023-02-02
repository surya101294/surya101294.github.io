// import * as React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import Typography from "@mui/material/Typography";
// import SchoolIcon from "@mui/icons-material/School";


// export default function CustomizedTimeline() {
	// return (
// 			// <Timeline position="alternate">
// 			// 	<TimelineItem>
// 			// 		<TimelineOppositeContent
// 			// 			sx={{ m: "auto 0" }}
// 			// 			align="right"
// 			// 			// variant="body2"
// 			// 		>
// 			// 			7 Months Long 11-11-6 Curriculum  
// 			// 		</TimelineOppositeContent>
// 			// 		<TimelineSeparator>
// 			// 			<TimelineConnector />
// 			// 			<TimelineDot>
// 			// 				<SchoolIcon />
// 			// 			</TimelineDot>
// 			// 			<TimelineConnector />
// 			// 		</TimelineSeparator>
// 			// 		<TimelineContent sx={{ py: "12px", px: 2 }}>
// 			// 			<Typography variant="h6" component="span">
// 			// 				MASAI School
// 			// 			</Typography>
// 			// 			<Typography>FULL STACK WEB DEVELOPMENT</Typography>
// 			// 		</TimelineContent>
// 			// 	</TimelineItem>
// 			// 	<TimelineItem>
// 			// 		<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
						
// 			// 		</TimelineOppositeContent>
// 			// 		<TimelineSeparator>
// 			// 			<TimelineConnector />
// 			// 			<TimelineDot color="primary">
// 			// 				<SchoolIcon />
// 			// 			</TimelineDot>
// 			// 			<TimelineConnector />
// 			// 		</TimelineSeparator>
// 			// 		<TimelineContent sx={{ py: "12px", px: 2 }}>
// 			// 			<Typography variant="h6" component="span">
//             //             Bachelor of Technology, Mechanical
// 			// 			</Typography>
// 			// 			<Typography>Mechanical</Typography>
// 			// 		</TimelineContent>
// 			// 	</TimelineItem>
// 			// 	<TimelineItem>
// 			// 		<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
// 			// 			Bachelor of Technology, Mechanical
// 			// 		</TimelineOppositeContent>
// 			// 		<TimelineSeparator>
// 			// 			<TimelineConnector />
// 			// 			<TimelineDot color="primary" variant="outlined">
// 			// 				<SchoolIcon />
// 			// 			</TimelineDot>
// 			// 			<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
// 			// 		</TimelineSeparator>
// 			// 		<TimelineContent sx={{ py: "12px", px: 2 }}>
// 			// 			<Typography variant="h6" component="span">
// 			// 				Krishna Engineering College, Ghaziabad
// 			// 			</Typography>
// 			// 		</TimelineContent>
// 			// 	</TimelineItem>
// 			// 	<TimelineItem>
// 			// 		<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
// 			// 			Intermediate
// 			// 		</TimelineOppositeContent>
// 			// 		<TimelineSeparator>
// 			// 			<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
// 			// 			<TimelineDot color="secondary">
// 			// 				<SchoolIcon />
// 			// 			</TimelineDot>
// 			// 			<TimelineConnector />
// 			// 		</TimelineSeparator>
// 			// 		<TimelineContent sx={{ py: "12px", px: 2 }}>
// 			// 			<Typography variant="h6" component="span">
//             //             Andhra Education Society, New Delhi
// 			// 			</Typography>
// 			// 		</TimelineContent>
// 			// 	</TimelineItem>
// 			// 	<TimelineItem>
// 			// 		<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
// 			// 			Matriculation
// 			// 		</TimelineOppositeContent>
// 			// 		<TimelineSeparator>
// 			// 			<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
// 			// 			<TimelineDot color="secondary">
// 			// 				<SchoolIcon />
// 			// 			</TimelineDot>
// 			// 			<TimelineConnector />
// 			// 		</TimelineSeparator>
// 			// 		<TimelineContent sx={{ py: "12px", px: 2 }}>
// 			// 			<Typography variant="h6" component="span">
// 			// 				St. Thomas School, Sahibabad
// 			// 			</Typography>
						
// 			// 		</TimelineContent>
// 			// 	</TimelineItem>
// 			// </Timeline>
// 	);
// }



import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}