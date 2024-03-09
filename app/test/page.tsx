"use client"


const TEST = () => {

    const startDate = new Date('Sat Mar 09 2024 12:00:00 GMT+0300 (GMT+03:00)');
    const duration = 3;
    const hours = [];
    for (let i = 0; i < duration; i++) {
        const startDateTime = new Date(startDate.getTime() + (i * 3600000));
        hours.push(startDateTime);
    }
      
    console.log(hours);

  return (
    <div>TEST</div>
  )
}

export default TEST