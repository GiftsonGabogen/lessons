"use client";

import { TypographyH1 } from "../atoms";
import { LearningGoalsForm } from "../molecules";

export function LessonsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <TypographyH1>Lessons</TypographyH1>
      </div>
      <div className="space-y-6">
        <LearningGoalsForm />
      </div>
    </div>
  );
}
