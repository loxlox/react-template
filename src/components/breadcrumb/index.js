import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { GoChevronRight, GoHome } from "react-icons/go";
import { capitalizeFirstLetter } from "../../config/helper";

function CustomBreadcrumb() {
  let location = useLocation();
  const pathName = location.pathname.slice(1);
  const title = () => {
    if (pathName.includes("-")) {
      const removeSeparator = pathName.split("-");
      let newArr = [];
      for (let i = 0; i < removeSeparator.length; i++) {
        const item = removeSeparator[i];
        newArr.push(capitalizeFirstLetter(item));
      }

      return newArr.join(" ");
    }
    return capitalizeFirstLetter(pathName);
  };
  const items =
    title() === ""
      ? [
          {
            title: (
              <Link to="/">
                <GoHome />
              </Link>
            ),
          },
        ]
      : [
          {
            title: (
              <Link to="/">
                <GoHome />
              </Link>
            ),
          },
          {
            title: title(),
          },
        ];

  return <Breadcrumb items={items} separator={<GoChevronRight />} />;
}

export default CustomBreadcrumb;
