import React from "react";
import LayoutComponent from "../layout";

function Layout(ComposedComponent) {
  return (
    <LayoutComponent>
      <ComposedComponent />
    </LayoutComponent>
  );
}

export default Layout;
