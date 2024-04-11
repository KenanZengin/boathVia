import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { UseFormSetValue } from 'react-hook-form';
import { getShipReservationCalendar } from '@/server/data/calendar';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = ({ 
  setValue, 
  shipId 
}: {
  setValue: UseFormSetValue<{
    port: string;
    duration: number;
    people: number;
    time: Date;
  }>;
  shipId: string | undefined;
}) => {

  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [excludedTimes, setExcludedTimes] = useState<Date[]>([]);
  const [reservedTimes, setReservedTimes] = useState<Date[]>([]);


  useEffect(() => {
    if (shipId) {
      getShipReservationCalendar(shipId).then((data) => {
        if (data && data.time) {
          const reservedTimes = data.time.map((timeStr) => new Date(timeStr.getTime() - (3600000 * 3)));
          setReservedTimes(reservedTimes);
          handleExcludedTimes(selectedDate || new Date(), reservedTimes);
          const defaultDate = new Date();
          defaultDate.setHours(defaultDate.getHours() + 1); 
          defaultDate.setMinutes(0); 
          defaultDate.setSeconds(0); 
          defaultDate.setMilliseconds(0);
          handleDateSet(defaultDate,reservedTimes)
          handleDateChange(defaultDate)
        }
      });
    }
  }, [shipId]);

  const handleDateChange = (date: Date): any => {
    console.log("HANDLECHANGE OPENED");
    
    if (!date) {
      return; 
    }
  
    date.setMinutes(0, 0, 0); 
  
    const today = new Date();
  
    const isReservedTime = reservedTimes.some((item) => item.getTime() === date.getTime());
    
  
    if (isReservedTime || date.getTime() < today.getTime()) {
      const defaultDate = new Date();
      defaultDate.setHours(defaultDate.getHours() + 1);
      defaultDate.setMinutes(0); 
      defaultDate.setSeconds(0); 
      defaultDate.setMilliseconds(0);

      const existingHours = reservedTimes.filter((item)=>item.getHours() === defaultDate.getHours());
     
      if(existingHours){
        const newHours = new Date(date)
        newHours.setHours(newHours.getHours() + 1)
        return handleDateChange(newHours)
      }
      date.setHours(defaultDate.getHours()); 
    }
  
    setValue("time", date); 
    setSelectedDate(date);
  
    handleExcludedTimes(date, reservedTimes);
  };

  const handleCalendarOpen = () =>{
    if(selectedDate){
      handleDateChange( selectedDate )
    }
  };


  const handleExcludedTimes = (date: Date, reservedTimes: Date[]) => {
    const excludedTimesForDate = reservedTimes
      .filter((data) => data.getDate() === date.getDate())
      .map((data) => data);
    setExcludedTimes(excludedTimesForDate);
  };

  const handleDateSet = (defaultDate:Date,fullDates:Date[]):any => {

    const testo = fullDates.some((item)=> item.getTime() == defaultDate.getTime())

    if(testo){
      defaultDate.setHours(defaultDate.getHours() + 1);
      return handleDateSet(defaultDate,fullDates)
    }

    setSelectedDate(defaultDate)
  }
 
  
  const defaultDate = new Date();
  defaultDate.setHours(defaultDate.getHours() + 1); 
  defaultDate.setMinutes(0); 
  defaultDate.setSeconds(0); 
  
  return (
    <div>
      <DatePicker
        selected={selectedDate || defaultDate}
        onChange={handleDateChange}
        excludeTimes={excludedTimes}
        showTimeSelect
        dateFormat="dd.MM.yyyy HH:mm"
        timeFormat="HH:mm"
        timeIntervals={60}
        minDate={new Date()}
        filterTime={(time)=>time.getTime() >= new Date().getTime()}
        shouldCloseOnSelect={false}
        onCalendarOpen={handleCalendarOpen}
        />
    </div>
  );
};

export default MyDatePicker;