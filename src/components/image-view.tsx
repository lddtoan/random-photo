import { CSSProperties, useEffect, useMemo } from "react";
import { random } from "lodash";
import Image from "./image";
import { useDispatch } from "react-redux";
import { actions } from "../store/features/image-view";
import { useLocation } from "react-router";
import dayjs from "dayjs";

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

export interface ImageViewProps {
  style?: CSSProperties;
}

const ImageView = ({ style }: ImageViewProps) => {
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/yesterday") {
      dispatch(actions.getImages(dayjs().subtract(1, "day").toDate()));
    } else if (location.pathname === "/tomorrow") {
      // Tomorrow needs add 1 second when uses dayjs().diff()
      dispatch(
        actions.getImages(dayjs().add(1, "day").add(1, "second").toDate())
      );
    } else {
      dispatch(actions.getImages());
    }
  }, [location.pathname]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        height: "100%",
        background:
          "radial-gradient(circle, rgba(171,247,177,1) 0%, rgba(255,255,255,1) 100%)",
        ...style
      }}
    >
      <Masonry style={{ flexBasis: "20%", height: "75%" }} index={0} />
      <Masonry style={{ flexBasis: "20%", height: "75%" }} index={1} />
      <Masonry style={{ flexBasis: "20%", height: "75%" }} index={2} />
    </div>
  );
};

export default ImageView;
