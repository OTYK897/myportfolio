import Link from "next/link";
import Image from "next/image";

//componenst
import NumberCount from "./components/count";
import PageLogo from "./components/logo";
import NavMenu from "./components/navMenu";

//icons
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Page() {


  return (
    <div className="min-h-screen max-w-[1980px] w-full mx-auto overflow-x-hidden pr-5">
      <header className="flex md:items-end justify-between">
        <h1 className="hover:bg-zinc-300 transition duration-200 active:bg-white">
          <Link
            href="http://192.168.1.14:3000/"
          >
            <PageLogo />
          </Link>
        </h1>
        <section className="grid md:top-5 md:right-5">
          <nav className="grid gap-5 text-lg md:flex">
            <NavMenu title="お問合せ" href="" icon={<CiMail size={24}/> } />
            <NavMenu title="instagram" href="" icon={<CiInstagram size={24}/> } />
            <NavMenu title="Facebook" href="" icon={<FaFacebook size={24}/>} />
            <NavMenu title="(旧Twitter)" href="" icon={<FaXTwitter size={24}/>} />
          </nav>
        </section>
      </header>
      <main className="w-full mt-20">
        <section className="flex items-center justify-around flex-col-reverse md:flex-row">
          <div className="">
            <h1 className="text-3xl font-extralight ">Otani Yoshiki</h1>
            <h2 className="flex items-center gap-1">
              <NumberCount number={2003} duration={3} /><p className="font-bold">年</p><NumberCount number={1} duration={3} /><p className="font-bold">月</p><NumberCount number={9} duration={3} /><p className="font-bold">日</p>
            </h2>
            <h3 className="font-light">
              <p>
                経歴：高校卒業後、株式会社センスへ就職し1年が経たないうちに倒産。
                そこからフリーになり3年間の勉強を得てHAL大阪の非常勤講師としてWEBデザインを教える。
              </p>
              <p className="text-red-500">好きな言葉：ダンゴムシ、触ってみたら、アルマジロ</p>
            </h3>
          </div>
          <Image
            width={700}
            height={500}
            src='/me.jpeg'
            alt="写真です"
            className="bg-gray-300 hidden xl:block"
          />
          <Image
            width={350}
            height={300}
            src='/me.jpeg'
            alt="写真です"
            className="bg-gray-300 block xl:hidden"
          />
        </section>
      </main>
    </div>    
  )
}