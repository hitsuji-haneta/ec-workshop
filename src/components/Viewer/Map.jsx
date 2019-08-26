import React, { useContext } from "react";
import styled from "styled-components";

import Clock from "../../images/clock.png";
import Table from "../../images/table.png";
import Menu from "../../images/menu.png";
import Reizouko from "../../images/reizouko.png";
import Calendar from "../../images/calendar.png";
import Window from "../../contexts/Window";
import Person from "../../contexts/Person";
import Message from "../../contexts/Message";
import Action from "../../contexts/Action";
import Progress from "../../contexts/Progress";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: #eafaf6; */
  position: relative;
`;

const Item = styled.img`
  @media screen and (max-width: 740px) {
    max-height: 60px;
  }
  @media screen and (min-width: 740px) {
    max-height: 100px;
  }
  position: absolute;
`;

const Map = () => {
  const { setViewerState } = useContext(Window.Context);
  const { setPerson } = useContext(Person.Context);
  const { setMessage } = useContext(Message.Context);
  const { setAction } = useContext(Action.Context);
  const { progress } = useContext(Progress.Context);

  const setPerson1 = () => {
    setPerson("person_1");
    setMessage("person_1");
    setAction("person_1");
    setViewerState("dialog");
  };
  const setPerson2 = () => {
    setPerson("person_2by");
    setMessage("person_2");
    setAction("person_2");
    setViewerState("dialog");
  };
  const setPerson3 = () => {
    setPerson("person_3");
    setMessage("person_3");
    setAction("person_3");
    setViewerState("dialog");
  };
  const setPerson4 = () => {
    setPerson("person_4");
    setMessage(progress === 6 ? "ending_1" : "person_4");
    setAction(progress === 6 ? "ending_1" : "person_4");
    setViewerState("dialog");
  };
  const setCalendar = () => {
    setPerson("calendar");
    setMessage(progress >= 3 ? "calendar_button" : "calendar");
    setAction(progress >= 3 ? "calendar_button" : "calendar");
    setViewerState("dialog");
  };
  return (
    <Wrapper>
      <Item
        style={{ top: "5%", left: "10%" }}
        onClick={() => setPerson3()}
        src={Clock}
        alt="clock"
      />
      <Item
        style={{ top: "50%", right: "50%" }}
        onClick={() => setPerson4()}
        src={Table}
        alt="table"
      />
      <Item
        style={{ bottom: "20%", left: "15%" }}
        onClick={() => setPerson1()}
        src={Menu}
        alt="Menu"
      />
      <Item
        style={{ top: "15%", right: "30%" }}
        onClick={() => setPerson2()}
        src={Reizouko}
        alt="Reizouko"
      />
      <Item
        style={{ bottom: "5%", right: "20%" }}
        onClick={() => setCalendar()}
        src={Calendar}
        alt="calendar"
      />
    </Wrapper>
  );
};

export default Map;
