import { Separator } from "./Util";

import { Menu, MenuToggle } from "./Header/Menu";  



export default function Header() {
    return (
      <div className="header">
        <h1>HARRISONN</h1>
        <Separator size={2} orientation={'vertical'}/>
        <MenuToggle />
        <Menu />
      </div>
    );
}
  