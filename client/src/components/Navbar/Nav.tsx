import DarkModeSwitch from "../DarkModeSwitch";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Nav() {
  return (
    <>
      <nav className="px-40 border-b">
        <div className="w-full flex">
          <h1>Logo</h1>
          <Input type="search" name="search" id="search" />
          <Button className="rounded-full px-8">Login</Button>
          <DarkModeSwitch />
        </div>
      </nav>
    </>
  );
}
