export default function Footer() {
  return (
    <footer className="bg-[#121212] w-full py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="font-thin text-white text-balance text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <a
            href="https://github.com/ivalshamkya"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Ival Shamkya
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/ivalshamkya/neobruu"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
