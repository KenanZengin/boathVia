import { getShipReservationCalendar } from '@/server/data/calendar';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { UseFormSetValue } from 'react-hook-form';

const MyDatePicker = ({ setValue, shipId }: {
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
  const [teste, setTeste] = useState<any>();


   useEffect(() => {
     if (shipId) {
       getShipReservationCalendar(shipId).then((data) => {
         if (data && data.time) {
            setReservedTimes(data.time.map((timeStr) => new Date(timeStr.getTime() - (3600000 * 3))));
         }
       });
     }
   }, [shipId]);

  const handleDateChange = (date: Date | null): any => {
    
    if (!date) {
      return; 
    }
  
    date.setMinutes(0, 0, 0); 
  
    const today = new Date();
    const userTimezoneOffset = new Date().getTimezoneOffset(); 
  
    if (date.getTime() < today.getTime() || 
        (date.getDate() === today.getDate() && date.getTime() < today.getTime() - userTimezoneOffset * 60000)) {
      setSelectedDate(null); 
      return;
    }
  
    const isReservedTime = reservedTimes.some((item) => item.getTime() === date.getTime());
    
  
    if (isReservedTime) {
      const defaultDate = new Date();
      defaultDate.setHours(defaultDate.getHours() + 1);
      defaultDate.setMinutes(0); 
      defaultDate.setSeconds(0); 
       
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
    handleDateChange( new Date() );
  };


  const handleExcludedTimes = (date: Date, reservedTimes: Date[]) => {
    const excludedTimesForDate = reservedTimes
      .filter((data) => data.getDate() === date.getDate())
      .map((data) => data);
    setExcludedTimes(excludedTimesForDate);
  };
  
 
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
