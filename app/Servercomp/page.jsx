"use client";
export default function Servercomp()
{
    return (
    <div>
      <h1>Hi I am Server Component</h1>
      <button
        className="bg-amber-400 text-black p-5"
        onClick={() => alert('HI I am Server')}
      >
        Server
      </button>
    </div>
  );
}
