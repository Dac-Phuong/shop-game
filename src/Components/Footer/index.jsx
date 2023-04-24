import React from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineIdcard,
  AiFillDollarCircle,
} from "react-icons/ai";
import { FiUsers, FiPhone, FiGlobe,FiLock } from "react-icons/fi";
import { BiNotepad } from "react-icons/bi";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full  bg-[#052A6E]">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-main ">
            <h2>HAIDANGPC - CHUYÊN CUNG CẤP THIẾT BỊ THÔNG MINH</h2>
            <ul className="footer-item">
              <li className="footer-list-item">
                <FiUsers className="mr-4 text-[20px]" />
                <p>Đơn vị chủ quản: CÔNG TY TNHH HÔNG DƯƠNG</p>
              </li>
              <li className="footer-list-item">
                <AiOutlineHome className="mr-4 text-[20px]" />
                <p>Address: Chùa Hang , Đồng Hỷ ,Thành phố Thái Nguyên</p>
              </li>
              <li className="footer-list-item">
                <FiPhone className="mr-4 text-[20px]" />
                <p>Hotline: 033.426.2754</p>
              </li>
              <li className="footer-list-item">
                <AiOutlineMail className="mr-4 text-[20px]" />
                <p>Email: haidangpc@gmail.com</p>
              </li>
              <li className="footer-list-item">
                <FiGlobe className="mr-4 text-[20px]" />
                <p>Website: https://www.haidangpc.vn/</p>
              </li>
              <li className="footer-list-item">
                <AiOutlineIdcard className="mr-4 text-[20px]" />
                <p>
                  GCNĐKDN 0107765019 | Ngày cấp 21/03/2017 | Nơi cấp Sở Kế hoạch
                  & Đầu tư TP Thái Nguyên
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <h2>CUSTOMER SERVICE</h2>
          <ul className="footer-item-right">
            <div>
              <li className="footer-list-item">
                <AiFillDollarCircle className="mr-4 text-[20px]" />
                <p>Returns & Shipping Policy</p>
              </li>
              <li className="footer-list-item">
                <BiNotepad className="mr-4 text-[20px]" />
                <p>Terms of Use</p>
              </li>
            </div>
            <div>
              <li className="footer-list-item">
                <FiLock className="mr-4 text-[20px]" />
                <p>Privacy Policy</p>
              </li>
              <li className="footer-list-item">
                <BsFillChatRightDotsFill className="mr-4 text-[20px]" />
                <p>Contact Us</p>
              </li>
            </div>
          </ul>
          <div className="footer-payment">
            <img
              src={require("../../image/logo/payment.png")}
              className="attachment-50x50 size-50x50 wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="footer-line">
        <div className="footer-line-container"></div>
        <span>©2023 Allrights reserved echeckin.vn</span>
      </div>
    </div>
  );
}
export default Footer;
