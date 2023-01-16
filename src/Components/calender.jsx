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
     <div style={{ border:'2px',borderBlockColor:'red'}}>
     <GitHubCalendar 
    username="surya101294" 
    // transformData={selectLastHalfYear} 
    fontSize={16}
    blockSize={20}
    style={{margin:'auto', width:'80%'}}
    // hideColorLegend
    // hideTotalCount
    >
      <ReactTooltip delayShow={20} html></ReactTooltip>
    </GitHubCalendar>
  </div>
 )
}

export default Calender