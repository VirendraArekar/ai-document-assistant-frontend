import DashboardLayout from "../layouts/DashboardLayout";

import SummaryPanel from "../components/intelligence/SummaryPanel";
import KeywordPanel from "../components/intelligence/KeywordPanel";
import TagPanel from "../components/intelligence/TagPanel";
import TranslationPanel from "../components/intelligence/TranslationPanel";
import InterviewPanel from "../components/intelligence/InterviewPanel";
import FlashcardPanel from "../components/intelligence/FlashcardPanel";

function Intelligence() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">AI Intelligence</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        <SummaryPanel />

        <KeywordPanel />

        <TagPanel />

        <TranslationPanel />

        <InterviewPanel />

        <FlashcardPanel />
      </div>
    </DashboardLayout>
  );
}

export default Intelligence;
