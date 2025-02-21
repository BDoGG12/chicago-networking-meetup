import React from "react";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";

const HeartButton = ({ onClick, isFavorite }) => {
  return (
    <Button
      variant={isFavorite ? "danger" : "outline-danger"}
      className="rounded-circle d-flex align-items-center justify-content-center"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
      }}
      onClick={onClick}
    >
      <FaHeart />
    </Button>
  );
};

export default HeartButton;
