type DateTuple = [number, number, number, number, number, number];

export function convert(dates: string[], time: string[]): DateTuple[] {
    console.log(dates);
    console.log(time);
  
    function convertToDate(dateStr: string, timeStr: string): DateTuple {
      const [hours, minutes] = timeStr.split(':').map(Number);
      const date = new Date(dateStr);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const day = date.getUTCDate();
      return [year, month, day, hours, minutes, 0];
    }
    
    // Convert dates and times
    const startDateTuple = convertToDate(dates[0], time[0]);
    const endDateTuple = convertToDate(dates[1], time[1]);
  
    return [startDateTuple, endDateTuple];
  }

  
  // Output the result
  
  