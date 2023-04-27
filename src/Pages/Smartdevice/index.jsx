import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BsFillCircleFill } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiFillAlert,
  AiFillPoundCircle,
  AiOutlineShake,
  AiFillRobot,
  AiFillDollarCircle,
  AiOutlineBgColors,
} from "react-icons/ai";
import {
  BsBuildingGear,
  BsBroadcastPin,
  BsFillShieldLockFill,
} from "react-icons/bs";
import { Link } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import product from "../../data/Smart/data.json";
import { FaHandHoldingWater } from "react-icons/fa";
import "./style.css";

function Smartdevice() {
  return (
    <div id="Smart">
      <div className="main-top">
        <div className="main-top-heading">
          <div className="main-top-title ">
            <h2>THIẾT BỊ THÔNG MINH</h2>
            <div className="main-heading-line" />
          </div>
          <div className="main-wrap">
            <div className="main-wrap-left">
              <Link to={"Home"} className="cursor-pointer">
                <img
                  className="main__row-banner"
                  alt=""
                  src={require("../../image/banner/nha-thong-minh.jpg")}
                />
              </Link>
            </div>
            <div className="main-top-right">
              <div>
                <h3 className="mb-[10px]">Ưu Điểm Vượt Trội</h3>
                <div className="right-heading mt-[10px]">
                  <div className="right-heading-1">
                    <div className="right-heading-icon">
                      <FaHandHoldingWater
                        color="#2A2388"
                        className="text-[24px] mr-[5px]"
                      />
                    </div>
                    <p>Tiết kiệm năng lượng</p>
                  </div>
                  <div className="right-heading-1">
                    <div className="right-heading-icon">
                      <AiOutlineSetting
                        color="#2A2388"
                        className="text-[24px] mr-[5px]"
                      />
                    </div>
                    <p>Tăng tính tiện nghi</p>
                  </div>
                </div>
                <div className="right-heading mt-[10px]">
                  <div className="right-heading-1">
                    <div className="right-heading-icon">
                      <AiFillAlert
                        color="#2A2388"
                        className="text-[24px] mr-[3px]"
                      />
                    </div>
                    <p>Tính an toàn cao</p>
                  </div>
                  <div className="right-heading-1">
                    <div className="right-heading-icon">
                      <AiFillPoundCircle
                        color="#2A2388"
                        className="text-[24px] mr-[3px]"
                      />
                    </div>
                    <p>Tạo sự đẳng cấp và sang trọng</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3>Tính Năng Chính</h3>
                <div className="main-top-item">
                  <div className="right-heading mt-[10px]">
                    <div className="w-full">
                      <div className="right-heading-1">
                        <div className="right-heading-icon bg-[#2A2388]">
                          <BsBroadcastPin
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Điều khiển từ xa</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#2A2388]">
                          <AiOutlineBgColors
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Kiểm soát tiêu thụ năng lượng</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#2A2388]">
                          <AiOutlineShake
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Bảo mật</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#2A2388]">
                          <AiFillRobot
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Tự động hóa nhà thông minh</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#2A2388]">
                          <BsBuildingGear
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Thiết lập hệ thống an ninh cho không gian</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#2A2388]">
                          <BsFillShieldLockFill
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p> Bảo đảm an toàn cho ngôi nhà</p>
                      </div>
                      <div className="right-heading-1 mt-2">
                        <div className="right-heading-icon bg-[#2A2388]">
                          <AiFillDollarCircle
                            color="#fff"
                            className="text-[24px] mr-[5px]"
                          />
                        </div>
                        <p>Tiết kiệm điện, hạn chế lãng phí</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-btn">
                <a className="social-btn-text" href="https://chat.zalo.me/">
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-product">
          <div className="w-full mt-[20px] mb-[30px]">
            <div className="main-heading relative">
              <h2 className="main-heading-col leading-loose">
                Sản phẩm thiết bị thông minh
              </h2>
            </div>
          </div>
          <div className="main-warp w-full">
            {product.map((item, index) => {
              return (
                <div key={item.id} className="main-wrap-col">
                  <div className="wrap-col-content w-2/4 p-[15px]">
                    <div className="wrap-colum">
                      <h3 className="wrap-col-name">{item.name}</h3>
                    </div>
                    <ul className="pt-[20px]">
                      {item.content.map((item) => {
                        return (
                          <li className="wrap-col-title">
                            <BsFillCircleFill
                              color="#2A2388"
                              className="text-[10px] mr-[7px] mt-[4px]"
                            />
                            <p className="text-[12px] text-[#04296E]">{item}</p>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="wrap-col-btn">
                      <a href="https://chat.zalo.me/">Liên hệ tư vấn</a>
                    </div>
                  </div>
                  <div className="wrap-col-content w-2/4 p-[14px]">
                    <Carousel
                      infiniteLoop={true}
                      autoPlay={true}
                      interval={2000}
                    >
                      {item.image.map((image, index) => {
                        return (
                          <img
                            key={index}
                            className="h-full w-full"
                            alt={item.name.id}
                            src={image}
                          />
                        );
                      })}
                    </Carousel>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Smartdevice;
