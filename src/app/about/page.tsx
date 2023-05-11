import Image from "next/image";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <>
      <h1 className="text-6xl font-bold">about me</h1>
      <div className="flex">
        <p className="text-xl mt-8 max-w-xs">
          I'm a 23 year old from Durham, UK, massively into software
          development. Right now, I'm a big fan of web technologies. At work, I
          am on the Digital Engagement team, building webchats for various HMRC
          services.
        </p>
        <Image
          width={200}
          height={200}
          alt="A picture of me!"
          src="/me.jpg"
          className="rounded-full border-4 border-[#FDD641] select-none sm:block hidden mt-5"
        />
      </div>
      <h2 className="text-4xl font-bold mt-5">What I'm into...</h2>
      <ul className="list-disc ml-5 gap-y-5 flex flex-col mt-2">
        <li className="text-xl">My wife, Georgia</li>
        <li className="text-xl">The web platform</li>
        <li className="text-xl">Brandon Sanderson books</li>
        <li className="text-xl">Weight training</li>
        <li className="text-xl">Underground Hip Hop</li>
      </ul>
      <Footer />
    </>
  );
}
