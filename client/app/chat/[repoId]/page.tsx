"use client";

import { Suspense, use } from "react";

import { ChatView } from "@/components/chat/chat-view";
import { RequireAuth } from "@/components/providers/require-auth";
import { Spinner } from "@/components/ui/spinner";

function ChatContent({ params }: { params: Promise<{ repoId: string }> }) {
  const { repoId } = use(params);

  return (
    <RequireAuth>
      <ChatView repoId={repoId} />
    </RequireAuth>
  );
}

export default function ChatPage({
  params,
}: {
  params: Promise<{ repoId: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex h-svh items-center justify-center">
          <Spinner className="size-8" />
        </div>
      }
    >
      <ChatContent params={params} />
    </Suspense>
  );
}