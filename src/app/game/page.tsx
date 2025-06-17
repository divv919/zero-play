
import Image from "next/image";

export default function Test() {
    return (
        <div className="py-16 px-24">
            <div className="text-5xl font-bold text-white">
                Red dead redemption
            </div>
            <div className="flex gap-30 mt-15">
                <div className="bg-surface w-[640px] h-[360px] rounded-2xl"></div>
                <div>
                    <div className="flex flex-col gap-10">
                        <Pills label="Game" />
                        <div className="flex flex-row gap-15">
                            <div className="flex flex-col gap-3 font-bold">
                                <div>Worth</div>
                                <div>Platforms</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="font-medium px-4">$99</div>
                                <div className="flex flex-row gap-5">
                                    <Pills label="PC" />
                                    <Pills label="Epic" />
                                    <Pills label="Steam" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-15 flex flex-row gap-7">
                        <Filledcard />
                        <Image
                            src="/share.svg"
                            alt="share"
                            width={62}
                            height={54}
                        />
                    </div>
                </div>
            </div>
            <Descriptions />
        </div>
    );
}

function Filledcard() {
    return (
        <div className="bg-gradient-to-b from-[#682DD4] to-[#9B21AA] rounded-lg ">
            <div className="rounded-lg px-15 py-3 font-medium text-white">
                Get Now
            </div>
        </div>
    );
}

function Pills({ label }: { label: string }) {
    return (
        <div className="bg-surface border-[#3C3A3A] rounded-2xl text-white text-sm px-6 py-1 w-fit">
            {label}
        </div>
    );
}

function Descriptions() {
    return (
        <div className="mt-40">
            <div className="text-white text-4xl font-bold">Description</div>
            <div className="mt-9">
                America, 1899. Arthur Morgan and the Van der Linde Gang are
                outlaws on the run. With federal agents and the best bounty
                hunters in the nation massing on their heels, the gang must rob,
                steal, and fight their way across the rugged heartland of
                America in order to survive. As deepening internal divisions
                threaten to tear the gang apart, Arthur must make a choice
                between his own ideals and loyalty to the gang who raised him.
                Winner of over 175 Game of the Year Awards and recipient of over
                250 perfect scores, Red Dead Redemption 2 is an epic tale of
                honor and loyalty at the dawn of the modern age. Red Dead
                Redemption 2 also includes Red Dead Online — the multiplayer
                experience set in the living world of Red Dead Redemption 2 —
                ride solo or form a posse; run moonshine; battle lawmen, outlaw
                gangs, ferocious wild animals, and much more as you forge your
                own path on the American frontier.
            </div>
        </div>
    );
}
