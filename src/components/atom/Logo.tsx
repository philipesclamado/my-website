import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image
        className="opcaity-100 absolute rounded-full"
        height={60}
        width={60}
        src="/images/id-mono.jpg"
        alt={""}
      />
      <Image
        className="absolute rounded-full opacity-0 hover:opacity-100 hover:cursor-pointer"
        height={60}
        width={60}
        src="/images/id.jpg"
        alt={""}
      />
    </div>
  );
};
