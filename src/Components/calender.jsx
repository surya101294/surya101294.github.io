import GitHubCalendar from 'react-github-calendar';

<GitHubCalendar username="surya101294" />

const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  
  // ...
    
  <GitHubCalendar 
    username="surya101294" 
    transformData={selectLastHalfYear} 
    hideColorLegend
    hideTotalCount
  />