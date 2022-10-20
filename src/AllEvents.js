import React from "react";
import Card from "./components/Card";
import { myevent } from "./data";

function AllEvents() {
  const soloEvents = myevent.map((event) => {
    return <Card key={event.id} {...event} />;
  });
  return <div>{soloEvents}</div>;
}

export default AllEvents;
