import { Box } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
<GitHubCalendar username="surya101294" />

 const Calender=()=>{
//  const selectLastHalfYear = contributions => {
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth();
//     const shownMonths = 10;
  
//     return contributions.filter(day => {
//       const date = new Date(day.date);
//       const monthOfDay = date.getMonth();
  
//       return (
//         date.getFullYear() === currentYear &&
//         monthOfDay > currentMonth - shownMonths &&
//         monthOfDay <= currentMonth
//       );
//     });
//   };
  
  // ...
  // borderShadow:'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
 return ( 
     <Box style={{width:'85%', margin:'auto'}} fontFamily={'lorum'}
     _hover={{ transform: 'scale(1.01)' }}>
     <GitHubCalendar 
    username="surya101294" 
    // transformData={selectLastHalfYear} 
    fontSize={12}
    blockSize={12}
    style={{margin:'auto', width:'100%'}}
    // hideColorLegend
    // hideTotalCount
    >
      <ReactTooltip delayShow={20} html></ReactTooltip>
    </GitHubCalendar>
  </Box>
 )
}

export default Calender