import { Link, type LinkProps } from "expo-router";
import { cn } from "@/helpers/cn";

type LinkButtonProps = LinkProps<string>

export function LinkButton(props: LinkButtonProps) {
  const { className, children, ...rest } = props
  return (
    <Link className={cn(className, 'text-slate-300 text-center text-base font-body')} {...rest}>
      {children}
    </Link>
  )
}