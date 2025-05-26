import HeroSection from "./HeroSection";
import ClosingTimes from "./ClosingTimes";
import TrackingSection from "./TrackingSection";
import Services from "./Services";
import ShippingPrices from "./ShippingPrices";
import LastNews from "./LastNews";
import OperationMode from "./OperationMode";
import Wrehouses from "./Warehouses";

export default function Home() {
    return (
        <div className='flex flex-col sm:gap-8 gap-16'>
            <HeroSection />
            <TrackingSection />
            <ClosingTimes />
            <Services />
            <ShippingPrices />
            <LastNews />
            <OperationMode />
            <Wrehouses />
        </div>
    );
}

