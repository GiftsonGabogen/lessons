"use client";

import { useForm, SubmitHandler } from "react-hook-form";
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
  resources: z.array(
    z.object({
      description: z.string(),
      type: z.string(),
      url: z.string(),
    })
  ),
});

type FormData = z.infer<typeof formSchema>;

interface LearningGoalsFormProps {
  onSubmit?: (data: FormData) => void;
}

export function LearningGoalsForm({ onSubmit }: LearningGoalsFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learningGoals: "",
    },
  });

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Learning goals submitted:", data.learningGoals);
    onSubmit?.(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <LearningGoalsSection form={form} />
        <ResourceSection />
        <Button>Submit Goals</Button>
      </form>
    </Form>
  );
}
