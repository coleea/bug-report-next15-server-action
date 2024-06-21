"use server";

export async function errorAction(prevState: number, formData: FormData) {
  if (Math.random() > 0.5) {
    throw new Error("SOME ERROR");
  } else {
    return prevState + 1;
  }
}
