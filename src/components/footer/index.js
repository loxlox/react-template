import React from "react";
import { Layout } from "antd";
import dayjs from "dayjs";

function CustomFooter() {
  return <Layout.Footer>©{dayjs().year()}</Layout.Footer>;
}

export default CustomFooter;
