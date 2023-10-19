// import React from 'react'
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import '../index.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isAfter, isBefore, addDays } from 'date-fns';

function BookingCalendar() {
    const [dateRange, setDateRange] = useState([null, null]);

    const handleDateClick = (date) => {
        const [startDate, endDate] = dateRange;

        if (!startDate || (startDate && endDate)) {
        // Set the start date if it's empty or both start and end are set
        setDateRange([date, null]);
        } else {
        // Check if the selected date range is within the allowed range (e.g., 7 days)
        const isWithinAllowedRange = isBefore(date, addDays(startDate, 7));
        // Set the end date
        if (isAfter(date, startDate)) {
            setDateRange([startDate, date]);
        } else {
            setDateRange([date, startDate]);
        }
        }
    };

  return (
    <div className='w-auto rounded-lg p-2'>
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
                        selectRange
                        onClickDay={handleDateClick}
                        // className="bg-neutral-500 text-black border-none"
                        calendarType="US"
                        tileClassName={({ date, view }) => {
                            if (dateRange[0] && dateRange[1]) {
                            if (
                                date >= dateRange[0] &&
                                date <= dateRange[1]
                            ) {
                                return "bg-neutral-500 text-white rounded-full";
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