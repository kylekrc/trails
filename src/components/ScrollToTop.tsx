
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showScrollTop) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center md:bottom-8 md:right-8">
        <p className="tag">
        This is a button
        </p>

        <button
        onClick={() =>
            window.scrollTo({
            top: 0,
            behavior: "smooth",
            })
        }
        aria-label="Back to top"
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-forest text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-bark active:translate-y-0"
        >
        <svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
        >
            <path d="m18 15-6-6-6 6" />
        </svg>
        </button>
    </div>
    );
}

export default ScrollToTop;
