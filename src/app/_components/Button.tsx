import { cn } from "@/lib/TailwindMerge";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariance> {}

const Button: FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(ButtonVariance({ variant, size, className }))}
      {...props}
    />
  );
};

const ButtonVariance = cva(
  "text-black py-2 rounded-2xl font-nunito font-bold",
  {
    variants: {
      variant: {
        outline: "border-2 border-black hover:bg-gray",
        bgray: "bg-gray hover:outline hover:outline-1",
      },
      size: {
        long: "px-10",
        short: "px-6",
      },
    },
    defaultVariants: { variant: "outline", size: "short" },
  }
);

export default Button;
