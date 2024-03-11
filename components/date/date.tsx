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
  //const [teste, setTeste] = useState<any>();


  useEffect(() => {
    //const now = new Date();
    //setTeste(now.setHours(now.getHours(), now.getMinutes(), 0, 0));
    if (shipId) {
      getShipReservationCalendar(shipId).then((data) => {
        if (data) {
          if (data.time) {
            setReservedTimes(data.time.map((timeStr) => new Date(timeStr.getTime() - (3600000 * 3))));
          }
        }
      });
    }
  }, [shipId]);

  const handleDateChange = (date: Date | null) => {

    if (date && date.getTime()) {
      const isReservedTime  = reservedTimes.some((item) => item.getTime() === date.getTime())
      if(isReservedTime ){
        date.setHours(12, 0, 0, 0);
      }

      setValue("time", date);
    }
    setSelectedDate(date);
  
    if (date) {
      handleExcludedTimes(date, reservedTimes);
    } else {
      setExcludedTimes([]);
    }


  };

  const handleExcludedTimes = (date: Date, reservedTimes: Date[]) => {
    const excludedTimesForDate = reservedTimes
      .filter((data) => data.getDate() === date.getDate())
      .map((data) => data);
    setExcludedTimes(excludedTimesForDate);
  };

 
  const defaultDate = new Date();
  defaultDate.setHours(0, 0, 0);  


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
        //minTime={teste}
        shouldCloseOnSelect={false}
      />
    </div>
  );
};

export default MyDatePicker;
