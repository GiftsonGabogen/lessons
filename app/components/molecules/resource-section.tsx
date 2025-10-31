import { TypographyH2 } from "..";
import { InfoIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResourceModal } from "../organisms";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { FormData } from "./learning-goals-form";

interface ResourceSectionProps {
  form: UseFormReturn<FormData>;
}

export function ResourceSection({ form }: ResourceSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "resources"
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TypographyH2>Resources</TypographyH2>
        <InfoIcon className="text-muted-foreground" />
      </div>

      {/* Display existing resources */}
      {fields.length > 0 && (
        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={field.id} className="p-3 border rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium">{form.getValues(`resources.${index}.description`)}</p>
                <p className="text-sm text-muted-foreground">
                  {form.getValues(`resources.${index}.type`)} - {form.getValues(`resources.${index}.url`)}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}

      <ResourceModal onAppend={append}>
        <Button variant="outline" size="icon">
          <PlusIcon size={48} />
        </Button>
      </ResourceModal>
    </div>
  );
}