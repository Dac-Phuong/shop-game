import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import data from "../../data/Security/heading.json";
import products from "../../data/Security/product.json";
import "./style.css";
import { NextArrow, PrevArrow } from "../../Components/NextSlider";

function Securitydevices() {
  const [check, setCheck] = useState(null);
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  return (
    <div className="Security-container" id="Security">
      <div className="main-top-heading mb-[50px]">
        <div className="main-top-title mt-[10px]">
          <h2>THIẾT BỊ AN NINH</h2>
          <div className="main-heading-line" />
        </div>
        <div className="main-wrap">
          <div className="main-top-right">
            <div>
              <h3>Thiết bị an ninh là gì?</h3>
              <div className="right-heading">
                <div>
                  <BsFillCircleFill
                    color="#2A2388"
                    className="text-[9px] mt-[8px] mr-[5px]"
                  />
                </div>
                <p>
                  Thiết bị an ninh là các thiết bị có chức năng báo trộm, báo
                  động hoặc cảnh báo hoả hoạn, cháy nổ… Khi xảy ra sự cố, các
                  thiết bị an ninh lập tức phát ra các âm thanh báo động và thực
                  hiện cuộc gọi khẩn cấp
                </p>
              </div>
            </div>
            <div>
              <h3>Chức năng của thiết bị an ninh</h3>
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
              <h3>Lợi ích tuyệt vời của thiết bị an ninh</h3>
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
          <div className="main-wrap-left">
            <a href="/">
              <img
                className="main__row-banner"
                alt=""
                src={require("../../image/banner/thiet-bi-an-ning.jpg")}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-[20px] mb-[30px]">
        <div className="main-heading relative">
          <h2 className="main-heading-col leading-loose">
            Sản phẩm thiết bị an ninh
          </h2>
        </div>
      </div>
      <div className="Security-wrap">
        {products.map((item) => {
          return (
            <div key={item.id} className="Security-wrap-col">
              <div className="Security-wrap-slider">
                <Slider {...settings} className="group">
                  {item.image.map((image, index) => {
                    return (
                      <img
                        key={index}
                        className="h-[320px] w-full"
                        alt=""
                        src={image}
                      />
                    );
                  })}
                </Slider>
              </div>
              <div className="Security-wrap-description mt-[10px] pl-[15px] pr-[15px]">
                <h2 className="text-black mb-auto">{item.name}</h2>
                <div className="Security-wrap-col-info">
                  <div className="Security-wrap-col-price">
                    <p className="text-red-900 text-[16px] font-bold">
                      {item.price}
                    </p>
                    <del className="text-gray-500 text-[14px] ml-2">
                      {item.defautlprice}
                    </del>
                  </div>
                  <div
                    className="Security-social-btn"
                    onClick={() => setCheck(item.id)}
                  >
                    <p className="Security-social-btn-text">Xem Chi Tiết</p>
                  </div>
                </div>
              </div>
              {check == item.id ? (
                <div className="Security-desciption">
                  <div className="h-2/3">
                    <h2>Mô Tả Sản Phẩm</h2>
                    <button
                      className="Security-icon"
                      onClick={() => setCheck(null)}
                    >
                      <AiOutlineClose size={20} />
                    </button>
                    {item.description.map((item) => {
                      return (
                        <ul key={item.id} className="Security-item">
                          <li className="Security-item-list">
                            <BsFillCircleFill
                              color="#fff"
                              className="text-[10px]  mt-[8px] mr-[10px]"
                            />
                            <p className="Security-list-text">{item}</p>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                  <div className="Security-social ">
                    <a
                      className="Security-social-btn-text"
                      href="https://www.facebook.com/CAMERAHAIDANGTN"
                    >
                      Liên hệ ngay
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Securitydevices;
