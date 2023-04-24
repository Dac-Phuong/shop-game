import React, { useEffect, useState, useRef } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import data from "../../data/Security/heading.json";
import product from "../../data/Smart/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { NextArrow, PrevArrow } from "../../Components/NextSlider";

function Smartdevice({ navSlider }) {
  const settings = {
    dots: <Slider/>,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1000,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,

          }
      }, {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
          }
      },
  ]
  };
  const setting = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div id="Smart">
      <div className="main-top">
        <div className="main-top-heading">
          <div className="main-top-title mt-[10px]">
            <h2>THIẾT BỊ THÔNG MINH</h2>
            <div className="main-heading-line" />
          </div>
          <div className="main-wrap">
            <div className="main-wrap-left">
              <a href="/">
                <img
                  className="main__row-banner"
                  alt=""
                  src={require("../../image/banner/nha-thong-minh.jpg")}
                />
              </a>
            </div>
            <div className="main-top-right">
              <div>
                <h3>Thiết bị điện thông minh là gì?</h3>
                <div className="right-heading">
                  <div>
                    <BsFillCircleFill
                      color="#2A2388"
                      className="text-[9px] mt-[8px] mr-[5px]"
                    />
                  </div>
                  <p>
                    Thiết bị điện thông minh là các thiết bị điện tử được sản
                    xuất dựa trên trí tuệ nhân tạo kết nối với các thiết bị
                    không dây khác như: 4G, WiFi,...Tạo nên một mạng lưới giúp
                    bạn dễ dàng điều khiển.
                  </p>
                </div>
              </div>
              <div>
                <h3>Chức năng của thiết bị điện thông minh</h3>
                <ul className="main-top-item">
                  {data.map((item) => {
                    return (
                      <li key={item.id} className="main-top-list">
                        <BsFillCircleFill
                          color="#2A2388"
                          className="text-[10px] mt-[8px] mr-[10px]"
                        />
                        <p>{item.name}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3>Lợi ích tuyệt vời của thiết bị điện thông minh</h3>
                <ul className="main-top-item">
                  {data.map((item) => {
                    return (
                      <li key={item.id} className="main-top-list">
                        <BsFillCircleFill
                          color="#2A2388"
                          className="text-[10px]  mt-[8px] mr-[10px]"
                        />
                        <p>{item.title}</p>
                      </li>
                    );
                  })}
                </ul>
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
                    <Slider
                      {...settings}
                      className="group"
                      swipeToSlide={true}
                      focusOnSelect={true}
                    >
                      {item.image.map((image, index) => {
                        return (
                          <img
                            key={index}
                            className="h-[280px] w-full"
                            alt={item.name.id}
                            src={image}
                          />
                        );
                      })}
                    </Slider>
                    <Slider {...setting}>
                      {item.image.map((image, index) => {
                        return (
                          <div className="image">
                            <img
                              key={index}
                              className="h-[50px] w-full"
                              alt={item.name.id}
                              src={image}
                            />
                          </div>
                        );
                      })}
                    </Slider>
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
