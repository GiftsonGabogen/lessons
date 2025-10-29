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
import { Textarea } from "@/components/ui/textarea";
import SelectContentComponent from "./SelectContent";
import { ResourceType } from "./SelectContent";

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
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Describe the resource..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="resource-type" className="text-sm font-medium">
              Resource Type
            </label>
            <SelectContentComponent
              resourceType={resourceType}
              setResourceType={setResourceType}
              url={url}
              setUrl={setUrl}
            />
          </div>
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
