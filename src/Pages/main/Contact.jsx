import ContactHero from "../../Components/Contact/ContactHero";
import OtherCompany from "../../Components/Contact/OtherCompany";
import EnquireForm from "../../Components/Form/EnquireForm";
import GetInTouch from "../../Components/Form/GetInTouch";
import HomeMap from "../../Components/Maps/HomeMap";

export default function Contact() {
    return (
        <div className="relative w-full">

            {/* HERO */}
            <ContactHero />

            {/* FORM OVERLAPPING HERO */}
            <div
                className="
                    relative 
                     
                    flex 
                    justify-center
                    mt-1
                "
           
            >
                <GetInTouch />

            </div>

            {/* MAP SECTION */}
            <section className="max-w-full flex items-center justify-center mx-4">

                {/* <HomeMap /> */}
            </section>
            <OtherCompany />
        </div>
    );
}
