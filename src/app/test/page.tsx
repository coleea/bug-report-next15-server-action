"use client";

import { useFormState } from "react-dom";
import { errorAction } from "../_server_action/error_action";
import { Suspense, useActionState } from "react";
import { useRouter } from "next/navigation";
import { PageForAction } from "../component/PageForAction";

export default function TestPage() {
  return (
    <>
      <Suspense fallback={<div>fallback</div>}>
        <PageForAction />
      </Suspense>
    </>
  );
}
