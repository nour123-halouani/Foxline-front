// export function AccordionOpen(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <div className="inline-flex items-center justify-center rounded-full shadow-custom bg-bg-lighter w-8 h-8">
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 12 12"
//                 width="1em"
//                 height="1em"
//                 className="text-gold"
//                 {...props}
//             >
//                 <path
//                     fill="currentColor"
//                     fillRule="evenodd"
//                     d="M4.15 9.85a.5.5 0 0 1 0-.707l3.15-3.15l-3.15-3.15a.5.5 0 0 1 .707-.707l3.5 3.5a.5.5 0 0 1 0 .707l-3.5 3.5a.5.5 0 0 1-.707 0z"
//                     clipRule="evenodd"
//                 />
//             </svg>
//         </div>
//     );
// }

export function AccordionOpen({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width="1em"
      height="1em"
      className={`text-gold ${className}`}
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