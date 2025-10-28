import { cn } from "@/lib/utils";

export const TypographyH1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-normal text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const TypographyH2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-2xl font-bold tracking-normal text-balance",
        className
      )}
    >
      {children}
    </h2>
  );
};
