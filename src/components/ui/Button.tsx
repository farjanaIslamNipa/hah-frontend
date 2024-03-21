import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;
type TVariant = "solid" | "outline";
type TButtonOptions = {
  variant?: TVariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ children, className, type, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "solid":
          return "btn-solid";
        case "outline":
          return "btn-outline";
        default:
          return "btn-solid";
      }
    };
    return (
      <button {...rest} ref={ref} type={type ? type : "button"} className={cn(getVariant(variant), className)}>
        {children}
      </button>
    );
  }
);

export default Button;
