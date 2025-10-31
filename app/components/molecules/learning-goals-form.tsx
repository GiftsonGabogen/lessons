"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ResourceSection } from "..";
import LearningGoalsSection from "./learning-goals-section";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

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

export function LearningGoalsForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learningGoals: "",
      resources: [],
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit lesson");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Lesson submitted successfully!");
      form.reset(); // Clear form after successful submission
      // You could show a success toast/message here
    },
    onError: (error) => {
      toast.error(`Failed to submit lesson: ${error.message}`);
      // You could show an error toast/message here
    },
  });

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    // React Hook Form validates the data, then we pass it to the mutation
    mutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <LearningGoalsSection form={form} />
        <ResourceSection form={form} />
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Submitting..." : "Submit Goals"}
        </Button>
      </form>
    </Form>
  );
}
