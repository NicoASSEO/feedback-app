import React from "react"
import ClipLoader from "react-spinners/ClipLoader"

const override = {
  display: "block",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  marginTop: "5rem",
}

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#fff"
      loading={loading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Spinner
