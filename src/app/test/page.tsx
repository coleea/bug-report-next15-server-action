"use client";

import { useFormState } from "react-dom";
import { errorAction } from "../_server_action/error_action";
import { Suspense, useActionState } from "react";
import { useRouter } from "next/navigation";
import { PageForAction } from "../component/PageForAction";
import { ErrorBoundary } from "react-error-boundary";

export default function TestPage() {
  return (
    <>
      <ErrorBoundary
        fallback={
          <div>
            <h1>Something went wrong</h1>
          </div>
        }
      >
        <Suspense fallback={<div>fallback</div>}>
          <PageForAction />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
