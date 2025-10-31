import { TypographyH2 } from "..";
import { InfoIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResourceModal } from "../organisms";

export function ResourceSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TypographyH2>Resources</TypographyH2>
        <InfoIcon className="text-muted-foreground" />
      </div>
      <ResourceModal>
        <Button variant="outline" size="icon">
          <PlusIcon size={48} />
        </Button>
      </ResourceModal>
    </div>
  );
}