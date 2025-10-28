"use client";

import { TypographyH1, TypographyH2 } from "./components/atoms/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SquarePlusIcon, InfoIcon, PlusIcon } from "lucide-react";
import { ResourceModal } from "./components/ResourceModal";

const formSchema = z.object({
  learningGoals: z
    .string()
    .min(10, {
      message: "Learning goals must be at least 10 characters.",
    })
    .max(500, {
      message: "Learning goals must not exceed 500 characters.",
    }),
});

type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learningGoals: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Learning goals submitted:", data.learningGoals);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <TypographyH1>Lessons</TypographyH1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          <FormLabel>
            <TypographyH2>Resources</TypographyH2>
            <InfoIcon />
          </FormLabel>
          <ResourceModal>
            <Button variant="outline" size="icon">
              <PlusIcon size={48} />
            </Button>
          </ResourceModal>
        </form>
      </Form>
    </div>
  );
}
