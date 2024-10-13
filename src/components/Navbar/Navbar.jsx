import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="flex items-center py-3 px-4 justify-between">
        <div>
          <h1 className="text-3xl font-semibold">BabelForge</h1>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action label="signOut" />
                  <UserButton.Link label="Dashboard" href="/dashboard" />
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="capitalize text-blue-600">login</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
