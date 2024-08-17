import { ReactNode } from "react";

const Button = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`px-6 py-1 border-white border-2 bg-[#FFDCAB] hover:text-[#AB6B2E] rounded-full transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
