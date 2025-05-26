export function AccordionClose({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14"
      width="0.9em"
      height="0.9em"
      className={`text-bg-lighter ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 10.18L2.39 4.52l-.89.87l5.59 5.71a1.18 1.18 0 0 0 .86.39a1.13 1.13 0 0 0 .85-.39l5.7-5.7l-.88-.89z"
      />
    </svg>
  );
}

