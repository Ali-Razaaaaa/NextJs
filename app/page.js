import Image from "next/image";

export default function Home() {
  return (
    <div>
   <h1 className="text-amber-300">Welcome to Ali Raza's Next JS Learning</h1>

   Apple Picture is here yaayy

   <Image src="/apple.jpg"
        alt="Picture of an apple" 
       height={34}
       width={34}
       className="rounded-4xl"
       
       />
    </div>
  );
}
