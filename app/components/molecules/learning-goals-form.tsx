"use client";

import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ResourceSection } from "..";
import LearningGoalsSection from "./learning-goals-section";

const formSchema = z.object({
  learningGoals: z
    .string()
    .min(10, {
      message: "Learning goals must be at least 10 characters.",
    })
    .max(500, {
      message: "Learning goals must not exceed 500 characters.",
    }),
  resources: z
    .array(
      z.object({
        description: z
          .string()
          .min(5, "Resource description must be at least 5 characters"),
        type: z.enum(["url", "file", "audio"], {
          message: "Please select a resource type",
        }),
        url: z.string().min(1, "URL or file path is required"),
      })
    )
    .optional(),
});

export type FormData = z.infer<typeof formSchema>;

interface LearningGoalsFormProps {
  onSubmit?: (data: FormData) => void;
}

export function LearningGoalsForm({ onSubmit }: LearningGoalsFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learningGoals: "",
      resources: [],
    },
  });

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", {
      learningGoals: data.learningGoals,
      resources: data.resources || [],
    });
    onSubmit?.(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <LearningGoalsSection form={form} />
        <ResourceSection form={form} />
        <Button>Submit Goals</Button>
      </form>
    </Form>
  );
}
