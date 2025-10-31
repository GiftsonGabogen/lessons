"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormField, ResourceTypeSelector, ResourceType } from "../molecules";
import { Textarea } from "@/components/ui/textarea";

interface ResourceModalProps {
  children: React.ReactNode;
}

export function ResourceModal({ children }: ResourceModalProps) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [resourceType, setResourceType] = useState<ResourceType | "">("");
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (description && resourceType) {
      console.log("Resource added:", {
        description,
        type: resourceType,
      });
      // Reset form
      setDescription("");
      setResourceType("");
      setOpen(false);
    }
  };

  useEffect(() => {
    console.log("Resource type changed:", resourceType);
  }, [resourceType]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Resource</DialogTitle>
          <DialogDescription>
            Add a new resource to help with your learning goals.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormField id="description" label="Description">
            <Textarea
              id="description"
              placeholder="Describe the resource..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </FormField>
          <FormField id="resource-type" label="Resource Type">
            <ResourceTypeSelector
              resourceType={resourceType}
              setResourceType={setResourceType}
              url={url}
              setUrl={setUrl}
            />
          </FormField>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!description || !resourceType}
          >
            Add Resource
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
