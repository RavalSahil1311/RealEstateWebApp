import { Swiper, SwiperSlide, loopFillGroupWithBlank } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "@/features/Common/modules/PropertyCard/PropertyCard";
import { useIsDesktop } from "@/features/Common/Hooks/useIsDesktop";

const PropertySlider = ({ featuredproperties }) => {
  const { isDesktop } = useIsDesktop();
  return (
    <>
      <Swiper
        slidesPerView={isDesktop ? 3 : 1}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        pagination={{ dynamicBullets: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {featuredproperties.map((property) => (
          <SwiperSlide key={property.id}>
            <PropertyCard {...property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PropertySlider;
