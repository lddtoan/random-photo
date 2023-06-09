import { sample } from "lodash";
import * as React from "react";
import { useSelector } from "react-redux";
import { selector } from "../store/features/image-view/selectors";

export interface ImageProps {
  style?: React.CSSProperties;
  index: number;
}

const Image = ({ style, index }: ImageProps) => {
  const [position, setPosition] = React.useState(sample(["100%", "-100%"]));
  const [blur, setBlur] = React.useState("0%");
  const [loaded, setLoaded] = React.useState(false);

  const { images } = useSelector(selector);

  React.useEffect(() => {
    if (window && images.length > 0 && loaded && position !== "0%") {
      window.requestAnimationFrame(() => setPosition("0%"));
    }
  }, [images, loaded, position]);

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
          transitionDelay: "250ms",
          transitionDuration: "500ms",
          transitionProperty: "top",
          top: blur
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
          transitionProperty: "top"
        }}
        onTransitionEnd={() => setBlur(sample(["-110%", "110%"]))}
      >
        {images.length > 0 && (
          <img
            src={images.at(index).url}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Image;
