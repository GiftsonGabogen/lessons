import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH2 } from "../atoms";
import { UseFormReturn } from "react-hook-form";

const LearningGoalsSection = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <FormField
      control={form.control}
      name="learningGoals"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <TypographyH2>What you want to learn</TypographyH2>
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder="Describe what you want to learn..."
              className="min-h-[120px] resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default LearningGoalsSection;
