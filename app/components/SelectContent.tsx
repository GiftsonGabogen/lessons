"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export type ResourceType = "file" | "url" | "audio";

const SelectContentComponent = ({
  resourceType,
  setResourceType,
  url,
  setUrl,
}: {
  resourceType: ResourceType | "";
  setResourceType: (value: ResourceType) => void;
  url: string;
  setUrl: (value: string) => void;
}) => {
  return (
    <Select
      value={resourceType}
      onValueChange={(value: ResourceType) => setResourceType(value)}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select resource type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="file">File</SelectItem>
        <SelectItem value="url">URL</SelectItem>
        <SelectItem value="audio">Audio</SelectItem>
      </SelectContent>
      {resourceType === "url" && (
        <Input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      )}
    </Select>
  );
};

export default SelectContentComponent;
