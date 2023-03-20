import { useMemo } from "react";
import { random } from "lodash";
import Image from "./image";

export interface MasonryProps {
  style?: React.CSSProperties;
}

export const Masonry = ({ style }: MasonryProps) => {
  const basises = useMemo(() => {
    const basises: number[] = [];
    basises.push(random(20, 60));
    basises.push(random(20, 80 - basises.at(0)));
    basises.push(100 - basises.at(0) - basises.at(1));
    return basises;
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem",
        ...style
      }}
    >
      <Image style={{ display: "flex", flexBasis: `${basises.at(0)}%` }} />
      <Image style={{ display: "flex", flexBasis: `${basises.at(1)}%` }} />
      <Image style={{ display: "flex", flexBasis: `${basises.at(2)}%` }} />
    </div>
  );
};

const ImageView = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        height: "100%",
        background:
          "radial-gradient(circle, rgba(144,238,144,1) 0%, rgba(255,255,255,1) 100%)"
      }}
    >
      <Masonry style={{ flexBasis: "20%", height: "75%" }} />
      <Masonry style={{ flexBasis: "20%", height: "75%" }} />
      <Masonry style={{ flexBasis: "20%", height: "75%" }} />
    </div>
  );
};

export default ImageView;
