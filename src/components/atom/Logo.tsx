import Image from "next/image";

export const Logo = () => {
  return (
    <div id="logo">
      <Image
        className="opcaity-100 absolute rounded-full"
        height={60}
        width={60}
        src="/images/mugshot-mono.jpg"
        id="logo"
        alt={""}
      />
      <Image
        className="absolute rounded-full opacity-0 hover:opacity-100 hover:cursor-pointer"
        height={60}
        width={60}
        src="/images/mugshot.jpg"
        id="logo"
        alt={""}
      />
    </div>
  );
};
