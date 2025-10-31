import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  children: ReactNode;
}

export function FormField({ id, label, children }: FormFieldProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}