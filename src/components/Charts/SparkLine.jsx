import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      color={color}
      currentColor={currentColor}
      dataSource={data}
      xName="xval"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: " ${xval}" + "${yval}",
        trackLineSettings: {
          visible: true,
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
  // return (
  //   <SparklineComponent
  //     id={id}
  //     height={height}
  //     width={width}
  //     color={color}
  //     dataSource={data}
  //     xName="xval"
  //     yName="yval"
  //     currentColor={currentColor}
  //     type={type}
  //     tooltipSettings={{
  //       visible: true,
  //       format: "{xval} : {yval}",
  //     }}
  //   ></SparklineComponent>
  // );
};

export default SparkLine;
