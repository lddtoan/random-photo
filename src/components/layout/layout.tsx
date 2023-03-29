import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import ImageView from "../image-view";
import "normalize.css";

export interface LayoutProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface NavigateButtonProps {
  children?: React.ReactNode;
  to: string;
  style?: React.CSSProperties;
}

const NavigateButton = ({ children, to, style }: NavigateButtonProps) => {
  return (
    <Link to={to}>
      <button
        style={{
          position: "absolute",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "50%",
          backgroundColor: "#fff",
          height: "3rem",
          width: "3rem",
          lineHeight: "1rem",
          color: "#333",
          cursor: "pointer",
          ...style
        }}
      >
        {children}
      </button>
    </Link>
  );
};

const Layout = ({ style }: LayoutProps) => {
  const location = useLocation();

  return (
    <div style={{ position: "relative", ...style }}>
      <NavigateButton
        to={location.pathname === "/" ? "/yesterday" : "/"}
        style={{
          top: "50%",
          left: "10%",
          transform: "translate(0%, -50%)",
          display: location.pathname === "/yesterday" ? "none" : "unset"
        }}
      >
        ⏴
      </NavigateButton>
      <ImageView />
      <NavigateButton
        to={location.pathname === "/" ? "/tomorrow" : "/"}
        style={{
          top: "50%",
          left: "90%",
          transform: "translate(-100%, -50%)",
          display: location.pathname === "/tomorrow" ? "none" : "unset"
        }}
      >
        ⏵
      </NavigateButton>
    </div>
  );
};

export default Layout;
