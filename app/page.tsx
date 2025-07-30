import Link from "next/link";
import NumberCount from "./components/count";
import PageLogo from "./components/logo";

export default async function Page() {
  await new Promise((res) => setTimeout(res, 750));

  return (
    <div className="min-h-screen max-w-[1980px] mx-0">
      <header className="flex items-center">
        <Link href="http://192.168.1.14:3000/">
          <PageLogo />
        </Link>
        <ol>
          <li>s</li>
        </ol>
      </header>
      <NumberCount number={2003} duration={5} />
    </div>    
  )
}