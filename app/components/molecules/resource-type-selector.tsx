import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export type ResourceType = "file" | "url" | "audio";

interface ResourceTypeSelectorProps {
  resourceType: ResourceType | "";
  setResourceType: (value: ResourceType) => void;
  url: string;
  setUrl: (value: string) => void;
}

export function ResourceTypeSelector({
  resourceType,
  setResourceType,
  url,
  setUrl,
}: ResourceTypeSelectorProps) {
  return (
    <div className="space-y-2">
      <Select
        value={resourceType}
        onValueChange={(value) => setResourceType(value as ResourceType)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select resource type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="file">File</SelectItem>
          <SelectItem value="url">URL</SelectItem>
          <SelectItem value="audio">Audio</SelectItem>
        </SelectContent>
      </Select>
      {resourceType === "url" && (
        <Input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      )}
    </div>
  );
}
