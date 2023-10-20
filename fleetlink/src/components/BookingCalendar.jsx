// import React from 'react'
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CustomCalendar.css';
import { /* isAfter, addDays, */ isBefore,  differenceInDays } from 'date-fns';

function BookingCalendar({ onDateSelect }) {
    const [dateRange, setDateRange] = useState([null, null]);

    const handleDateClick = (date) => {
        setDateRange(prevDateRange => {
            const [startDate, endDate] = prevDateRange;
            
            // if (!startDate || (startDate && endDate)) {
            //     // Set the start date if it's empty or both start and end are set
            //     return [date, endDate];
            // } else {
            //     // Check if the selected date range is within the allowed range (e.g., 7 days)
            //     const isWithinAllowedRange = isBefore(date, addDays(startDate, 7));
            //     // Set the end date
            //     if (isAfter(date, startDate)) {
            //         return [startDate, date];
            //     } else {
            //         return [date, startDate];
            //     }
            // }

            // if (!startDate) {
            //     // Set the start date if it's empty
            //     return [date, null];
            // } else if (!endDate) {
            //     // If start date is set but end date is not, set the end date if within the allowed range
            //     const isWithinAllowedRange = isBefore(date, addDays(startDate, 7));
            //     if (isWithinAllowedRange) {
            //         return [startDate, date];
            //     } else {
            //         // Handle this case as needed, e.g., show an error message
            //         console.log("Date selection is outside the allowed range.");
            //         return [startDate, null];
            //     }
            // } else {
            //     // Both dates are set, start a new selection
            //     return [date, null];
            // }
            

            const today = new Date();
            if (isBefore(date, today)) {
                console.log("Selected date is before today's date.");
                return [startDate, endDate]; // Keep the previous selection
            }

            // If the start date is not set, set the clicked date as the start date
            if (!startDate) {
                return [date, endDate];
            }

            // If both start and end dates are set, start a new selection
            if (startDate && endDate) {
                return [date, null];
            }

            // If only the start date is set, set the clicked date as the end date
            return [startDate, date];
        });
        onDateSelect(dateRange)
    };

  return (
    <div className='w-full flex items-center justify-center'>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}  >
            <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
                <DemoItem>
                <DateRangeCalendar calendars={1} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider> */}

        <div className="p-4 border-none">
            <div className="mb-4 border-none">
                <div className="calendar bg-white border-none">
                    <Calendar
                        value={dateRange}
                        onChange={(date) => setDateRange(date)}
                        selectRange
                        onClickDay={handleDateClick}
                        // className="bg-neutral-500 text-black border-none"
                        tileClassName={({ date, view }) => {
                            if (dateRange[0] && dateRange[1]) {
                            if (
                                date >= dateRange[0] &&
                                date <= dateRange[1]
                            ) {
                                return "text-white rounded-full";
                            }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
        
    </div>
    
    
  )
}

export default BookingCalendar