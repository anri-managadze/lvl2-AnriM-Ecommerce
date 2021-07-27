import React from "react";
import Collapse from "@material-ui/core/Collapse";
import { Box } from "@material-ui/core";

export default function ListMenu({
  children,
  text,
  flexDirection,
  width,
  justifyContent,
  display,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      width={width}
    >
      <Box onClick={handleClick}>{text}</Box>
      <Collapse in={open}> {children} </Collapse>
    </Box>
  );
}
