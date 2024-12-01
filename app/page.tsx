import Profile from "./components/Profile";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
      <Profile />
      </div>

    </div>
  );
}
