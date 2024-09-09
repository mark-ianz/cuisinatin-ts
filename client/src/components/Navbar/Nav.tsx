import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Nav() {
  const { setTheme } = useTheme();

  return (
    <>
      <nav className="px-40 border-b">
        <div className="w-full flex">
          <h1>Logo</h1>
          <Input type="search" name="search" id="search" />
          <Button className="px-8" onClick={()=> setTheme ("light")}>
            Login
          </Button>
        </div>
      </nav>
    </>
  );
}
