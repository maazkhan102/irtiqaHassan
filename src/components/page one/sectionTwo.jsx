import React, { useState } from "react";
import luxuryhotel from "../../assets/luxury-hotel.jpg";
import residentialbg from "../../assets/residentialBanner.png";
import architecturebg from "../../assets/architectureBG.jpg";
import commercialbg from "../../assets/commercialBG.jpg";
import furniturebg from "../../assets/furnitureBG.jpg";
import { Link } from "react-router-dom";

const PageOneSectionTwo = () => {

    // const navigate = useNavigate()
    const [hoveredItem, setHoveredItem] = useState(null);

    const images = {
        0: residentialbg,
        1: commercialbg,
        2: architecturebg,
        3: furniturebg,
        default: luxuryhotel,
    };

    const data = [
        {
            head: "RESIDENTIAL",
            url: "/residential",
            desc: "Transforming spaces into deeply personal sanctuaries, we design homes that reflect your lifestyle, values, and individuality. From concept to completion, every detail is thoughtfully curated to bring comfort, beauty, and timeless elegance into your everyday life",
        },
        {
            head: "COMMERCIAL",
            url: "/commercial",
            desc: "We craft dynamic commercial environments that blend functionality with striking aesthetics. Whether it's a boutique, office, or hospitality space, our designs aim to enhance brand identity, inspire productivity, and elevate the user experience",
        },
        {
            head: "ARCHITECTURE",
            url: "/architectural",
            desc: "At the intersection of form and function, our architectural designs are rooted in context, purpose, and innovation. We approach every project with a holistic vision—balancing spatial planning, environmental harmony, and structural integrity",
        },
        {
            head: "FURNITURE",
            url: "/furniture",
            desc: "Our bespoke furniture pieces are more than just functional—they’re sculptural statements. Designed with precision and crafted with care, each piece complements the spaces we create while standing beautifully on its own",
        },
    ];

    return (
        <>
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-[1200px] md:h-screen bg-fixed bg-center cursor-pointer transition-all duration-500"
            style={
                {
                    backgroundImage: `url(${images[hoveredItem] || images.default})`,
                    backgroundSize: "100% 100vh"
                }
            }
        >
            {data.map((item, index) => (
                <Link
                    to={item?.url}
                    key={index}
                    target="_top"
                    className="flex flex-col items-center gap-3 justify-center relative group border border-[#ffffff3d]"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    aria-label={item.head}
                // onClick={() => navigate(item?.url)}
                >
                    <div className="absolute inset-0 transition-all duration-300 bg-black/50 backdrop-blur-none lg:group-hover:backdrop-blur-[21px]"></div>

                    <div className="z-10 flex flex-col gap-1 sm:gap-2 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                        <div className="text-white text-[40px] tracking-wider leading-10 uppercase nigelina whitespace-pre-line text-center">
                            {item.head?.replace(" ", "\n")}
                        </div>
                    </div>

                    <div className="z-10 w-[50%] text-white text-[12px] font-extralight md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-[1500ms] text-center leading-4 pt-2 md:pt-0">
                        {item.desc}
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
};

export default PageOneSectionTwo;

