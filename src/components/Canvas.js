import React from "react";
import Sketch from "react-p5";
import { useScrollPosition } from "../utils/useScrollPosition";
import styled from "styled-components";

const StyledCanvas = styled(Sketch)`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
`;

let spacing = 150;
let arcSize1, arcSize2, arcSize3, arcSize4;
let colorR, colorG, colorB;

const Canvas = () => {
  const scrollPosition = useScrollPosition()/2;

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight, true);
    p5.background(59, 88, 102);
    // p5.background(255);

    for (let y = 0; y < p5.height; y += spacing) {
      for (let x = 0; x < p5.width; x += spacing) {
        arcSize1 = p5.map(scrollPosition, 0, p5.width - 5, 0, p5.HALF_PI);
        arcSize2 = p5.map(
          scrollPosition,
          0,
          p5.width - 5,
          p5.PI,
          p5.PI + p5.HALF_PI
        );
        arcSize3 = p5.map(scrollPosition, 0, p5.width - 5, p5.HALF_PI, p5.PI);
        arcSize4 = p5.map(
          scrollPosition,
          0,
          p5.width - 5,
          p5.PI + p5.HALF_PI,
          p5.TWO_PI
        );

        colorR = p5.map(scrollPosition, 0, p5.width, 255, 59);
        colorG = p5.map(scrollPosition, 0, p5.width, 87, 88);
        colorB = p5.map(scrollPosition, 0, p5.height, 103, 102);
        spacing = p5.map(p5.width, 0, p5.height, p5.height / 40, p5.height / 2);

        
        p5.fill(colorR, colorG, colorB);
        // p5.fill(255, 87, 103);
        // p5.fill(16, 124, 179);
        // p5.stroke(240, 217, 186);

        p5.stroke(255-colorR, 255-colorG, 255-colorB);
        p5.strokeWeight(spacing / 80);

        p5.arc(
          x + spacing * 0.5,
          y + spacing * 0.5,
          spacing,
          spacing,
          0,
          arcSize1
        );
        p5.arc(
          x + spacing * 0.5,
          y + spacing * 0.5,
          spacing,
          spacing,
          p5.PI,
          arcSize2
        );
        p5.arc(
          x + spacing * 0.5,
          y + spacing * 0.5,
          spacing,
          spacing,
          p5.HALF_PI,
          arcSize3
        );
        p5.arc(
          x + spacing * 0.5,
          y + spacing * 0.5,
          spacing,
          spacing,
          p5.PI + p5.HALF_PI,
          arcSize4
        );
      }
    }
  };

  return <StyledCanvas setup={setup} draw={draw}/>;
};

export default Canvas;
