import { classNames } from "../lib/cssTools";
import { motion } from 'framer-motion'
import Image from "next/image";

const HomeSection = ({
    title,
    description,
    subheading,
    image,
    reversed,
}) => {
    return (
        <motion.section
            className={classNames(
                "m-10 gap-12 flex justify-around flex-col",
                (reversed ? "md:flex-row-reverse" : "md:flex-row"),
        )}
        >
            <div className="p-20 rounded-lg flex items-center bg-sky-400/[0.8]">
                {/* Text container within parent div */}
                <div className="mx-3">
                    <h1 className="text-4xl font-bold text-cyan-50">{title}</h1>
                    <h3 className="text-xl mt-6 font-bold text-cyan-100">
                        {subheading}
                    </h3>
                    <p className="text-cyan-100 text-md">{description}</p>
                </div>
            </div>

            <Image
                src={image}
                width={300}
                height={400}
                alt={title}
                className="max-w-[500px] shadow-2xl rounded-lg"
            />
        </motion.section>
    );
};

export default HomeSection;