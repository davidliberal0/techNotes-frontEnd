import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

function DashFooter() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => {
    navigate("/dash");
  };

  let goHomeButton = null;
  if (pathname !== "/dash") {
    goHomeButton = (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }

  const content = (
    <footer className="dash-footer">
      {goHomeButton}
      <p>Current: User</p>
      <P>Status:</P>
    </footer>
  );

  return content;
}

export default DashFooter;
