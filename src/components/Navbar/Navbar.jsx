import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div>
      <div className="flex items-center py-3 px-4 justify-between">
        <div>
          <h1 className="text-3xl font-semibold">BabelForge</h1>
        </div>
        <div>
          <ul className="flex gap-5"></ul>
        </div>
        <div>
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton></UserButton>
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="capitalize text-blue-600">Login button</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
