export function AccordionOpen({ className, lang, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            width="1em"
            height="1em"
            className={`text-gold ${className}`}
            style={lang === "ar" ? { transform: "scaleX(-1)" } : undefined}
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.15 9.85a.5.5 0 0 1 0-.707l3.15-3.15l-3.15-3.15a.5.5 0 0 1 .707-.707l3.5 3.5a.5.5 0 0 1 0 .707l-3.5 3.5a.5.5 0 0 1-.707 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}