import Link from "next/link";

export default function Navigation()
{
    return (
        <header className="grid grid-cols-2">
            <div className="">
                Thapa Logo
                  </div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/service">Service</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                         <li>
                            <Link href="/about/teams">About-Teams</Link>
                        </li>

                         <li>
                            <Link href="/Clientcomp">Client Component</Link>
                        </li>

                         <li>
                            <Link href="/Servercomp">Server Component</Link>
                        </li>

                    </ul>
                </nav>
          
        </header>
    );
}