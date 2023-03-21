import { useEffect, useMemo } from "react";
import { random } from "lodash";
import Image from "./image";
import { useDispatch } from "react-redux";
import { actions } from "../store/features/image-view";

export interface MasonryProps {
  style?: React.CSSProperties;
  index: number;
}

export const Masonry = ({ style, index }: MasonryProps) => {
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
      <Image
        style={{ display: "flex", flexBasis: `${basises.at(0)}%` }}
        index={index * 3 + 0}
      />
      <Image
        style={{ display: "flex", flexBasis: `${basises.at(1)}%` }}
        index={index * 3 + 1}
      />
      <Image
        style={{ display: "flex", flexBasis: `${basises.at(2)}%` }}
        index={index * 3 + 2}
      />
    </div>
  );
};

const ImageView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getImages());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        height: "100%",
        background:
          "radial-gradient(circle, rgba(171,247,177,1) 0%, rgba(255,255,255,1) 100%)"
      }}
    >
      <Masonry style={{ flexBasis: "20%", height: "75%" }} index={0} />
      <Masonry style={{ flexBasis: "20%", height: "75%" }} index={1} />
      <Masonry style={{ flexBasis: "20%", height: "75%" }} index={2} />
    </div>
  );
};

export default ImageView;
