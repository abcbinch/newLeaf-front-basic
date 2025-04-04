import React from "react";

interface Props {
  children: React.ReactNode; //<div></div>
}

export default function Container({ children }: Props) {
  return <div style={{ border: "2px dashed gold" }}>{children}</div>;
}
