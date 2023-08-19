import React from "react";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
function Footer() {
  return (
    <div className="bg-[--primary-color] w-full  h-16 flex flex-col text-[--bg-color] text-md justify-center align-center p-1">
      <div className="mx-auto basis-full flex gap-1 ">
        <div>Follow Me : </div>
        <a href="#linkedin">
          <LinkedIn></LinkedIn>
        </a>
        <a href="#facebook">
          <Facebook></Facebook>
        </a>
        <a href="#instagram">
          <Instagram></Instagram>
        </a>
      </div>
      <div className="basis-1/2 mx-auto"> &copy; Hemant Prajapati</div>
    </div>
  );
}

export default Footer;
