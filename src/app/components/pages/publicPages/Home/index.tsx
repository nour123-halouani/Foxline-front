import HeroSection from "./HeroSection";
import ClosingTimes from "./ClosingTimes";
import TrackingSection from "./TrackingSection";

export default function Home() {

    return (
        <div className='container flex flex-col sm:gap-8 gap-16'>
            <HeroSection />
            <TrackingSection />
            <ClosingTimes />
        </div>
    );
}

