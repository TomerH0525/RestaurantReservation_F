import { Button } from "@/components/ui/button";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Menubar } from "@radix-ui/react-menubar";
import { MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header(): JSX.Element {

    const navigate = useNavigate();
  return (
    <div className="bg-stone-500">
      <div className="mx-5 py-2 2xl:px-24 lg:px-8 sm:px-0 flex items-center justify-between">
        <div className="flex gap-6 items-center justify-evenly">
          <div className="flex items-center">
            <img src="\logoMain.png" alt="website logo" className="w-14 mr-3 cursor-pointer " onClick={() => navigate("/")} />
            <p className="font-bold lg:hover:text-stone-200 cursor-pointer sm:text-xl" onClick={() => navigate("/")}>Restaurant Reservations</p>
          </div>
          <div className="lg:flex lg:gap-5 hidden">
            <Button>Home</Button>
          </div>
        </div>

        <div className="lg:flex lg:gap-2 hidden">
          {/* <Avatar>
            <AvatarImage src="/avatar-profile-male.svg" sizes="1" className="bg-stone-600 border-solid border-black" />
            <AvatarFallback className="border-2 border-solid border-black ">
                RR
            </AvatarFallback>
        </Avatar> */}
          <Button variant={"secondary"} onClick={() => navigate("/home/login")}>Login</Button>
          <Button onClick={() => navigate("/home/register")}>Register</Button>
        </div>
        <div className="lg:hidden">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger > <img src="/menu.svg" alt="menu icon" className="w-10 lg:hidden"/> </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => navigate("/home")}>HOME</MenubarItem>
                        <MenubarItem>SOMETHING</MenubarItem>
                        <MenubarSeparator className="text-black"/>
                        <MenubarItem onClick={() => navigate("/home/login")}>LOGIN</MenubarItem>
                        <MenubarItem onClick={() => navigate("/home/register")}>REGISTER</MenubarItem>

                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            
        </div>
      </div>
    </div>
  );
}
