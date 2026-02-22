import logo from "../../assets/images/logo.png";
import petImage from "../../assets/images/pet.png";

export function LeftPanel() {
  return (
    <div
      className="relative rounded-3xl flex flex-col items-center justify-start max-h-screen overflow-hidden
         bg-[linear-gradient(180deg,#ffdbbc_0%,#ffd1aa_55%,#ffffff_100%)] sm:px-12 px-6 py-8"
    >
      {/* Top Content */}
      <div className="max-w-120 z-10 mt-12">
        {/* Logo */}
        <div className="pb-3">
          <img src={logo} alt="PETAD Logo" className="w-37.5" />
        </div>

        {/* Hero Content */}
        <div className="max-w-130">
          <h1 className="font-bold text-[28px] sm:text-[42px] leading-[1.2] text-[#001323] whitespace-normal">
            Connecting Pet <br />
            Lovers <span className="text-[#e8613c]">❣️</span> For Easier <br />
            Adoption!
          </h1>

          <p className="mt-5 text-[14px] sm:text-[18px] leading-[1.6] text-[#333]">
            List your pets for adoption or discover pets/animals listed for
            adoption by their owners
          </p>
        </div>
      </div>

      {/* Bottom Pet Image */}
      <img
        src={petImage}
        alt="Dog, bird and cat"
        className="w-full h-auto block"
      />
    </div>
  );
}
