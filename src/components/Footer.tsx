import React from "react";
import { Pagination } from "@anchor/react-components";
const Footer = () => {
  return (
    <div>
      <Pagination
        currentPage={1}
        onPageChange={function noRefCheck() {}}
        pageCount={20}
        totalItems={7}
      />
      
    </div>
  );
};

export default Footer;
