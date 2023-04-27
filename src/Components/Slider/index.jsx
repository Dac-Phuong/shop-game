import React from "react";
import "./style.css";
import { FaCheck } from "react-icons/fa";
function Sliders() {
  return (
    <div className="banner">
      <div>
        <img
          src={require("../../image/banner/banner-hd.png")}
          alt=""
          decoding="async"
          loading="lazy"
          width="100%"
          className="h-full"
        />
      </div>
      <div className="banner-title">
        <h2>CÔNG TY TNHH CÔNG NGHỆ HỒNG DƯƠNG</h2>
        <div className="pt-[15px]">
          <h3>Chuyên cung cấp và lắp đặt các loại thiết bị Công Nghệ</h3>
          <div className="banner-name">
            <FaCheck className="mr-[10px]" />
            <p>Thiết bị thông minh</p>
          </div>
          <div className="banner-name">
            <FaCheck className="mr-[10px]" />
            <p>Thiết bị an ninh</p>
          </div>
          <div className="banner-name">
            <FaCheck className="mr-[10px]" />
            <p>Thiết bị văn phòng</p>
          </div>
        </div>
        <div className="banner-btn">
          <a href="https://chat.zalo.me/">LIÊN HỆ TƯ VẤN</a>
        </div>
      </div>
    </div>
  );
}
export default Sliders;
