"use client";

import React from "react";

export default function SignalsPage() {
  return (
    <div className="flex flex-col min-h-full p-6 space-y-4">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Signals
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Live trading signals will appear here.
        </p>
      </div>

      {/* Empty State */}
      <div className="flex items-center justify-center flex-1 border border-border rounded-xl bg-card p-8">
        <p className="text-muted-foreground text-sm">
          No signals available yet.
        </p>
      </div>

    </div>
  );
}
