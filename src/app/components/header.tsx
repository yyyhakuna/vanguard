import { SidebarTrigger, Sidebar } from "@/components/ui/sidebar";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoMdMenu } from "react-icons/io";

export type MenuItem = {
  name: string;
  type: "select" | "text";
  children?: MenuItem[];
};

const Header = () => {
  const items = [
    {
      name: "Azienda",
      type: "select",
      children: [],
    },
    {
      name: "Gettone",
      type: "text",
      children: [],
    },
    {
      name: "Ecosistema",
      type: "select",
      children: [],
    },
  ];
  return (
    <div className="h-[86px] bg-black flex px-5">
      <div className="flex gap-[14px] pt-5 flex-shrink-0">
        <img src="/logo.png" alt="" className="h-[35px] flex-shrink-0" />
        <img src="/vanguard.png" alt="" className="h-[35px] flex-shrink-0" />
      </div>
      <div className="pt-3 hidden sm:flex pr-56 pl-24 justify-between flex-1">
        {/* pc端样式 */}
        <div className="flex items-center h-10">
          {items.map((item) => {
            // 修改部分：根据 item.type 渲染不同的元素
            if (item.type === "select") {
              return (
                <Select key={item.name}>
                  <SelectTrigger className="border-none gap-0 text-header-menu!">
                    <span className="text-[16px] font-alegreya-sans ">
                      {item.name}
                    </span>
                  </SelectTrigger>
                  {item.children.length !== 0 && (
                    <SelectContent className="">
                      {item.children?.map((child: MenuItem) => (
                        <SelectItem key={child.name} value={child.name}>
                          {child.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  )}
                </Select>
              );
            } else {
              return (
                <div key={item.name} className="pb-[2px] px-6">
                  {/* 这里可以根据需要添加文本类型菜单项的内容 */}
                  <span className="text-header-menu font-alegreya-sans">
                    {item.name}
                  </span>
                </div>
              );
            }
          })}
        </div>
        <button className="mt-1 flex-shrink-0 px-4 h-7 rounded-full border-[0.75px] border-white">
          <div className="h-4  justify-center text-white text-xs font-alegreya-sans ">
            Connetti portafoglio
          </div>
        </button>
      </div>
      <div className="sm:hidden ml-auto flex items-center gap-3 pb-3">
        {/* 移动端样式 */}
        {/* <button className=" flex-shrink-0 px-4 h-7 rounded-full border-[0.75px] border-white">
          <div className="h-4  justify-center text-white text-xs font-alegreya-sans ">
            Connetti portafoglio
          </div>
        </button> */}
        <SidebarTrigger className="text-white  cursor-pointer ">
          <IoMdMenu className="text-white size-[35px] " />
        </SidebarTrigger>
        <Sidebar className="bg-black">
          {items.map((item) => {
            // 修改部分：根据 item.type 渲染不同的元素
            if (item.type === "select") {
              return (
                <Select key={item.name}>
                  <SelectTrigger className="border-none gap-0">
                    <span className="text-header-menu text-[16px] font-alegreya-sans ">
                      {item.name}
                    </span>
                  </SelectTrigger>
                  {item.children.length !== 0 && (
                    <SelectContent className="">
                      {item.children?.map((child: MenuItem) => (
                        <SelectItem key={child.name} value={child.name}>
                          {child.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  )}
                </Select>
              );
            } else {
              return (
                <div key={item.name} className="pl-3">
                  {/* 这里可以根据需要添加文本类型菜单项的内容 */}
                  <span className="text-header-menu font-alegreya-sans">
                    {item.name}
                  </span>
                </div>
              );
            }
          })}
        </Sidebar>
      </div>
    </div>
  );
};

export default Header;
