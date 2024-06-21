"use client";

import { useFormState } from "react-dom";
import { errorAction } from "../_server_action/error_action";
import { Suspense, useActionState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/navigation";
import { PageForAction } from "../component/PageForAction";

export default function () {
  return (
    <>
      <Suspense fallback={<div>fallback</div>}>
        <PageForAction />
      </Suspense>
    </>
  );
}
