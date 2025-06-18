
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
       <>
        <Loots />
        <GameCards label="Ending soon" />
        <GameCards label="Epic Games" />
        <GameCards label="Steam" />
       </>
    );
}


function Loots() {
    return (
        <div className="py-16 px-20">
            <div className="flex flex-row justify-between items-center">
                <div className="text-[32px] font-semibold">
                    Loot and in-game items
                </div>
                <div className="flex flex-row gap-4">
                    <div>
                        <Image
                            src="/moverleft.svg"
                            alt="arrow-left"
                            width={36}
                            height={36}
                        />
                    </div>
                    <div>
                        <Image
                            src="/moverright.svg"
                            alt="arrow-right"
                            width={36}
                            height={36}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-9 mt-6">
                <div className="bg-gradient-to-b from-[#6F6992] to-[#2B0B64] p-[1px] rounded-lg ">
                    <div className="bg-surface h-[300px] w-[400px] rounded-lg"></div>
                </div>
                <div className="bg-gradient-to-b from-[#6F6992] to-[#2B0B64] p-[1px] rounded-lg ">
                    <div className="bg-surface h-[300px] w-[400px] rounded-lg"></div>
                </div>
                <div className="bg-gradient-to-b from-[#6F6992] to-[#2B0B64] p-[1px] rounded-lg ">
                    <div className="bg-surface h-[300px] w-[400px] rounded-lg"></div>
                </div>
               
            </div>
        </div>
    );
}
function GameCards({label}: {label: string}) {
    return (
        <div className="py-16 px-20">
            <div className="flex flex-row justify-between items-center">
                <div className="text-[32px] font-semibold">
                    {label}
                </div>
                <div className="flex flex-row gap-4">
                    <div>
                        <Image
                            src="/moverleft.svg"
                            alt="arrow-left"
                            width={36}
                            height={36}
                        />
                    </div>
                    <div>
                        <Image
                            src="/moverright.svg"
                            alt="arrow-right"
                            width={36}
                            height={36}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-9 mt-6">
                <Link href="/game">
                <div className="bg-gradient-to-b from-[#6F6992] to-[#2B0B64] p-[1px] rounded-lg ">
                    <div className="bg-surface h-[225px] w-[290px] rounded-lg"></div>
                </div>
                </Link>
                <div className="bg-gradient-to-b from-[#6F6992] to-[#2B0B64] p-[1px] rounded-lg ">
                    <div className="bg-surface h-[225px] w-[290px] rounded-lg"></div>
                </div>
                <div className="bg-gradient-to-b from-[#6F6992] to-[#2B0B64] p-[1px] rounded-lg ">
                    <div className="bg-surface h-[225px] w-[290px] rounded-lg"></div>
                </div>
                <div className="bg-gradient-to-b from-[#6F6992] to-[#2B0B64] p-[1px] rounded-lg ">
                    <div className="bg-surface h-[225px] w-[290px] rounded-lg"></div>
                </div>
                
               
            </div>
        </div>
    );
}


