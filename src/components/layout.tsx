import * as React from "react";
import { Link } from "react-router-dom";
import ImageView from "./image-view";
import "normalize.css";

export interface LayoutProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Layout = ({ style }: LayoutProps) => {
  return (
    <div style={style}>
      <Link to={"/yesterday"} />
      <ImageView />
      <Link to={"/tomorrow"} />
    </div>
  );
};

export default Layout;
