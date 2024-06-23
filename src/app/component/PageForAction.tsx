"use client";

import { useFormState } from "react-dom";
import { errorAction } from "../_server_action/error_action";
import { Suspense, useActionState } from "react";
// import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/navigation";

export function PageForAction() {
  const [actionState, newErrorAction] = useActionState(errorAction, 0);
  const router = useRouter();
  return (
    <>
      <div className="" onClick={() => router.push("/404")}>
        이동
      </div>

      <Suspense fallback={<div>fallback</div>}>
        
          <form action={newErrorAction}>
            <button>Submit</button>
          </form>
          <h1>{actionState}</h1>
        
      </Suspense>
    </>
  );
}
