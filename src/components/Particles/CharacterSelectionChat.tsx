import { cn } from "../../lib/utils";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CharacterItem {
    title: string;
    icon: string; // Changed from React.ReactNode to string to hold the URL
    href: string;
}

interface SelectCharacterProps {
    desktopClassName?: string;
    mobileClassName?: string;
}

export const SelectCharacter: React.FC<SelectCharacterProps> = ({ desktopClassName, mobileClassName }) => {
    const items: CharacterItem[] = [
        {
            title: "Anna",
            icon: "https://firebasestorage.googleapis.com/v0/b/days-without-makeine-anime.appspot.com/o/Character%20Icons%2Fanna1.png?alt=media&token=3d1264a7-b262-430d-a482-188f0c9d732f",
            href: "/",
        },
        {
            title: "Komari",
            icon: "https://firebasestorage.googleapis.com/v0/b/days-without-makeine-anime.appspot.com/o/Character%20Icons%2Fkomari2.png?alt=media&token=a0e12598-b088-429f-b7b5-5d53c5097ebc",
            href: "/chat",
        },
        {
            title: "Lemon",
            icon: "https://firebasestorage.googleapis.com/v0/b/days-without-makeine-anime.appspot.com/o/Character%20Icons%2Flemon2.png?alt=media&token=73b5b303-37c6-448b-8250-5c1497b90147",
            href: "/game",
        },
        {
            title: "Nuku",
            icon: "https://firebasestorage.googleapis.com/v0/b/days-without-makeine-anime.appspot.com/o/Character%20Icons%2Fnuku1.png?alt=media&token=377b0099-535f-4a63-9737-6c96fed8df4c",
            href: "/icon4",
        },
        {
            title: "Kaju",
            icon: "https://firebasestorage.googleapis.com/v0/b/days-without-makeine-anime.appspot.com/o/Character%20Icons%2Fkaju1.png?alt=media&token=6b5ebd8e-ee31-49b1-9e94-9c5daddfca55",
            href: "/icon5",
        },
    ];

    useEffect(() => {
        // Preload the images
        const imageUrls = items.map(item => item.icon);
        preloadImages(imageUrls);
    }, [items]);

    return (
        <MenuSelect items={items} className={mobileClassName} />
    );
};

interface MenuSelectProps {
    items: CharacterItem[];
    className?: string;
}

const MenuSelect: React.FC<MenuSelectProps> = ({ items, className }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <Link
                                    to={item.href}
                                    className="h-20 w-20 rounded-full flex items-center justify-center"
                                >
                                    <LazyLoadImage
                                        alt={`${item.title} icon`}
                                        src={item.icon}
                                        className="w-full h-full"
                                        effect="opacity"
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center"
            >
                <div className="h-full w-full rounded-full text-neutral-500" />
            </button>
        </div>
    );
};

// Preload function
const preloadImages = (urls: string[]) => {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};
