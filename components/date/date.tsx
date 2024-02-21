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
      const fakeData = [{ date: new Date(2024, 1, 25, 21, 0) },{ date: new Date(2024, 1, 24, 20, 0) }]; // Örnek fake veri
      const selectedDateStr = date.toISOString().split('T')[0]; // Seçilen tarihin string hali (YYYY-MM-DD)
      const excludedTimesForDate = fakeData
        .filter(data => {
          const dataDateStr = data.date.toISOString().split('T')[0];
          return dataDateStr === selectedDateStr;
        })
        .map(data => data.date);
      setExcludedTimes(excludedTimesForDate);
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
      />
      
    </div>
  );
};

export default MyDatePicker;

  