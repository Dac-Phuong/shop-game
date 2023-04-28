import React from "react";
import {
  AiFillSkype,
  AiFillTwitterCircle,
  AiOutlineFieldTime
} from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { FiUsers, FiPhone, FiGlobe } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import "./style.css";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full  bg-[#052A6E]">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-main ">
            <h2>HONGDUONG - CHUYÊN CUNG CẤP THIẾT BỊ CÔNG NGHỆ</h2>
            <ul className="footer-item">
              <li className="footer-list-item">
                <FiUsers className="mr-4 text-[20px]" />
                <p>Đơn vị chủ quản: CÔNG TY TNHH HÔNG DƯƠNG</p>
              </li>
              <li className="footer-list-item">
                <IoLocationOutline className="mr-4 text-[20px]" />
                <p>Address: Chùa Hang , Đồng Hỷ ,Thành phố Thái Nguyên</p>
              </li>
              <li className="footer-list-item">
                <FiPhone className="mr-4 text-[20px]" />
                <p>Hotline: 0963.809.069</p>
              </li>
              <li className="footer-list-item">
                <TfiEmail className="mr-4 text-[20px]" />
                <p>Email: haidangpc@gmail.com</p>
              </li>
             
              <li className="footer-list-item">
                <AiOutlineFieldTime className="mr-4 text-[20px]" />
                <p>Thời gian làm việc : 7h45 - 18h30 thứ 2- chủ nhật/</p>
              </li>
              <li className="footer-list-item">
                <FiGlobe className="mr-4 text-[20px]" />
                <p>Website: https://www.haidangpc.vn/</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[23%]">
          <h2>MẠNG XÃ HỘI</h2>
            <div className="social-item-icon mt-[10px]">
            <a href="" className="social-list-icon">
              <div href="" className="social-icon">
                <FaFacebook className="text-[16px] item-center" />
              </div>
            </a>
            <p>Facebook</p>
          </div>
          <div className="social-item-icon">
            <a href="" className="social-item-icon">
              <div className="social-list-icon">
                <div className="social-icon">
                  <SiZalo className="text-[16px] item-center" />
                </div>
              </div>
              <p>Zalo</p>
            </a>
          </div>
          <div className="social-item-icon">
            <a href="" className="social-list-icon">
              <div href="" className="social-icon">
                <AiFillSkype className="text-[16px] item-center" />
              </div>
            </a>
            <p>Skype</p>
          </div>
          <div className="social-item-icon">
            <a className="social-list-icon">
              <div href="" className="social-icon">
                <AiFillTwitterCircle className="text-[16px] item-center" />
              </div>
            </a>
            <p>Twitter</p>
          </div>
        </div>
        <div className="footer-right">
          <h2>GOOGLE MAP</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.5208549394938!2d105.83027366962378!3d21.582666645840202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313527c16e2f9c19%3A0x4a6ef90ccf465ef4!2zTcOheSB0w61uaCBo4bqjaSDEkcSDbmc!5e0!3m2!1svi!2s!4v1682668939461!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
            className="google-map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
