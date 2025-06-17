export default function NavBar() {
    return (
        <div className="flex flex-row justify-between items-center px-20 py-9 ">
            <Logo />

            <div className="flex flex-row gap-6">
                <Hollowcard />  
                <Filledcard />
            </div>
            
        </div>
    );
}

function Logo() {
    return (
        <div className="bg-gradient-to-b from-[#8861F1] to-[#CB32E6] bg-clip-text text-transparent">
            <span className="text-[44px]  font-kaushan">Z</span>
            <span className="text-[24px]  font-kaushan">ero</span>
            <span className="text-[44px]  font-kaushan">P</span>
            <span className="text-[24px]  font-kaushan">lay</span>
        </div>
    );
}

function Hollowcard() {
    return (
        <div className="bg-gradient-to-b from-[#8861F1] to-[#CB32E6] p-[1px] rounded-lg ">
            <div className="bg-background rounded-lg px-4 py-3 font-medium text-[#C536E7]">
                Contact
            </div>
        </div>
    );
}

function Filledcard() {
    return (
        <div className="bg-gradient-to-b from-[#682DD4] to-[#9B21AA] rounded-lg ">
            <div className="rounded-lg px-4 py-3 font-medium text-white">
                Contact
            </div>
        </div>
    );
}
