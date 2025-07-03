export default function Header() {
  return (
    <header className="flex w-full gap-8 items-center">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-6xl font-bold">Hi, I'm Amr 👋</h1>
        <p className="text-2xl max-w-[400px] ">
          Enthusiastic software engineer. I love building stuff! Very active on
          the web.
        </p>
      </div>

      <img
        src="pp2.jpg"
        alt="Profile Pic"
        className="rounded-full w-30 h-30  md:w-40 md:h-40 object-fill shrink-0 self-center"
      />
    </header>
  );
}
