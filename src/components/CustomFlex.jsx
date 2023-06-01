import React from "react";
export default function Flex({
  children,
  direction = "row",
  content = "center",
  items = "center",
  spacing = "0",
  className,
  onClick,
  id,
  wrap,
  style,
  ref,
  ...rest
}) {
  return (
    <div
      id={id}
      ref={ref}
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: content,
        alignItems: items,
        flexWrap: wrap,
        ...style,
        ...rest,

        "& > *": {
          margin: spacing * 8,
        },
      }}
    >
      {children}
    </div>
  );
}
