import React, { useState } from "react";
import dayjs from "dayjs";

export default function DateSelector() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const startingdate = (event) => {
    setStartDate(event.target.value);
  };

  const endingdate = (event) => {
    setEndDate(event.target.value);
  };

  //   function diff() {
  //     const date1 = dayjs(startDate).format("DD/MM/YYYY");
  //     // const date2 = dayjs(endDate).format("DD/MM/YYYY");
  //     if (!startDate) {
  //       return;
  //     }
  //     return date1;
  //   }

  //   function diff2() {
  //     // const date1 = dayjs(startDate).format("DD/MM/YYYY");
  //     const date2 = dayjs(endDate).format("DD/MM/YYYY");
  //     if (!endDate) {
  //       return;
  //     }
  //     return date2;
  //   }

  return (
    <div>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={startingdate} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={endingdate} />
      </div>
      <div>
        {format(startDate)} {format(endDate)}
      </div>
    </div>
  );
}
export const format = function (date) {
  const date1 = dayjs(date).format("DD/MM/YYYY");
  if (!date) {
    return;
  }
  return date1;
};
