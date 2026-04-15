import { ChevronRight } from "lucide-react";

const LongArrow = ({ className }: { className?: string }) => {
  return (
    <span className="relative">
      <img
        src="/long-arrow.svg"
        className={`w-14 ${className} absolute top-0
       right-0`}
      />
    </span>
  );
};

export default LongArrow;
