import { sample } from "lodash";
import * as React from "react";

export interface ImageProps {
  style?: React.CSSProperties;
}

const Image = ({ style }: ImageProps) => {
  const [position, setPosition] = React.useState(sample(["100%", "-100%"]));
  const [blur, setBlur] = React.useState(true);

  React.useEffect(() => {
    setPosition("0px");
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "1rem",
        ...style
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "1rem",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(1px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          height: "100%",
          width: "100%",
          zIndex: "100",
          transitionDelay: `${sample(
            Array.from(Array(10).keys()).map((i) => i * 200)
          )}ms`,
          transitionDuration: "500ms",
          transitionProperty: "opacity",
          opacity: blur ? "1" : "0"
        }}
      />
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "10",
          top: position,
          transitionDuration: "1.5s",
          transitionProperty: "top",
          backgroundColor: "red"
        }}
        onTransitionEnd={() => setBlur(false)}
      ></div>
    </div>
  );
};

export default Image;
