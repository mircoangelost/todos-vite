import React from "react";
import { Box } from "@mui/system";
import {
  Wrapper,
  Calendar,
  CalendarTitle,
  CalendarNumber,
} from "./header.styles";


type Props = {
  title: string;
}

const Header = ({ title}: Props) => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentDay = currentDate.getDate();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <h3 style={{ margin: 0 }} >{title}</h3>
      <Wrapper>
      <Calendar>
        <CalendarTitle>
          <span className="month">{currentMonth}</span>
        </CalendarTitle>
        <CalendarNumber>
          <span className="number">{currentDay}</span>
        </CalendarNumber>
      </Calendar>
    </Wrapper>
    </Box>
  );
};

export default Header;
