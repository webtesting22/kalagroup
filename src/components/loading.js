import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading = () => (
  <div
    style={{
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spinner
      animation="border"
      variant="primary"
      title={<h6>Loading</h6>}
      style={{
        marginRight: 6,
        width: 50,
        height: 50,
      }}
    />
    <span style={{ fontSize: "1.5rem" }}>Loading</span>
  </div>
);
