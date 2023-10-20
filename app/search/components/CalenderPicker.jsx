import { useState } from "react";
import React from "react";
import { DateRange } from "react-date-range";
import { useSearchStore } from "@/store";

const CalenderPicker = () => {
  const startDate = useSearchStore((state) => state.dates[0]);
  const endDate = useSearchStore((state) => state.dates[1]);
  const [dateRangeLabel, setDateRangeLabel] = useState("Select Ranges");

  const handleSelect = (ranges) => {
    useSearchStore.setState({
      dates: [ranges.selection.startDate, ranges.selection.endDate],
    });
    setDateRangeLabel(
      `${ranges.selection.startDate.toDateString()} - ${ranges.selection.endDate.toDateString()}`
    );
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <DateRange
      ranges={[selectionRange]}
      minDate={new Date()}
      onChange={handleSelect}
      rangeColors={["#FF385C"]}
    />
  );
};

export default CalenderPicker;
