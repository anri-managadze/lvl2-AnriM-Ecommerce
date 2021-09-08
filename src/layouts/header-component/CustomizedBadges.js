import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useSelector} from "react-redux";
import {selectCounter} from "../../store/cart/cartSelector";


const StyledBadge = withStyles(() => ({
  badge: {
    right: 35,
    top: 13,
    padding: "0 4px",
  },
}))(Badge);

export default function CustomizedBadges() {
  const counter=useSelector(selectCounter)
  console.log(counter)

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={counter} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
