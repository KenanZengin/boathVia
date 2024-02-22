"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [excludedTimes, setExcludedTimes] = useState<Date[]>([]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);

    if (date) {
      const selectedDateStr = date.toISOString().split('T')[0]; 
      const fakeData = [{ date: new Date(2024, 1, 25, 21, 0) },{ date: new Date(2024, 1, 24, 20, 0) }]; 

      const isExcludedTime = fakeData.some(data => {
        const dataDateStr = data.date.toISOString().split('T')[0]; 
        const dataHour = data.date.getHours();
        const dataMinute = data.date.getMinutes();
        
        return dataDateStr === selectedDateStr && dataHour === date.getHours() && dataMinute === date.getMinutes();
      });

      if (isExcludedTime) {
    
        setSelectedDate(null);
        setExcludedTimes([]);

        setSelectedDate(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0));
        return;
      }

      const excludedTimesForDate = fakeData
        .filter(data => {
          const dataDateStr = data.date.toISOString().split('T')[0];
          return dataDateStr === selectedDateStr;
        })
        .map(data => data.date);
      setExcludedTimes(excludedTimesForDate);
    } else {
      setSelectedDate(null);
      setExcludedTimes([]); 
    }
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate || new Date() }
        onChange={handleDateChange}
        excludeTimes={excludedTimes}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm"
        timeFormat="HH:mm"  
        timeIntervals={60}
        minDate={new Date()}
        shouldCloseOnSelect={false}
      />
      
    </div>
  );
};

export default MyDatePicker;

  



















  