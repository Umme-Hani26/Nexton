import React from "react";
import Flex from "./Flex";
import { useLocation } from "react-router";

const BreadCrumb = () => {
  let { pathname } = useLocation();
  const path = pathname.split("/")[1];

  return (
    <>
      <Flex className="gap-2 mt-20">
        <h4>Home</h4>
        <h4>/</h4>
        <h4>{path}</h4>
      </Flex>
    </>
  );
};

export default BreadCrumb;
