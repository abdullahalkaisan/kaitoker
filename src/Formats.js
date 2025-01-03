
import { format } from 'date-fns';


export const timeAgo = (createdAt)=> {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - createdDate) / 1000); // Difference in seconds
  
    const diffInMinutes = Math.floor(diffInSeconds / 60); // Convert to minutes
    const diffInHours = Math.floor(diffInMinutes / 60); // Convert to hours
    const diffInDays = Math.floor(diffInHours / 24); // Convert to days
    const diffInMonths = Math.floor(diffInDays / 30); // Approximate to months
    const diffInYears = Math.floor(diffInMonths / 12); // Approximate to years
  
    // Return formatted string based on time difference
    if (diffInSeconds < 60) {
      // return `${diffInSeconds}s`; // Seconds
      return diffInSeconds === 0 ? "just now" : `${diffInSeconds}s`; // Seconds

    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m`; // Minutes
    } else if (diffInHours < 24) {
      return `${diffInHours}h`; // Hours
    } else if (diffInDays < 30) {
      return `${diffInDays}d`; // Days
    } else if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''}`; // Months
    } else {
      return `${(diffInYears + (diffInMonths / 12)).toFixed(1)}y`; // Years with decimal
    }
  }







export const formatedDate = (isoDate)=> {
    const getformattedDate = format(new Date(isoDate), "dd MMM yyyy, h:mm a");
    return getformattedDate;
}
