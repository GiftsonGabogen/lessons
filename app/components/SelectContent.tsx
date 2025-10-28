import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ResourceType = "file" | "url" | "audio";

const SelectContentComponent = ({
  resourceType,
  setResourceType,
}: {
  resourceType: ResourceType | "";
  setResourceType: (value: ResourceType) => void;
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
    </Select>
  );
};

export default SelectContentComponent;
