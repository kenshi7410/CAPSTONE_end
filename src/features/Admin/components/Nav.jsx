import React from "react";

import { Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCourseListAction, fetchUserListAction } from "../redux/action";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to="/admin">Quản lí khóa học</Link>, "sub1", <UserOutlined />),
  getItem(
    <Link to="/admin/quanlinguoidung">Quản lí người dùng</Link>,
    "sub2",
    <FileOutlined />
  ),
  getItem(<Link to="/">Trang chủ</Link>, "sub3", <DesktopOutlined />),
];
const Nav = () => {
  const onClick = (value) => {
    if (value.key === "sub2") {
      dispatch(fetchUserListAction());
    }else if(value.key === "sub1"){
      dispatch(fetchCourseListAction())
    }
  };
  const dispatch = useDispatch();
  return (
    <Menu
      className="h-100"
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      // theme="dark"
    />
  );
};
export default Nav;
