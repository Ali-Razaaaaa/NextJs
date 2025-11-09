"use server";

export async function submitform(formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  console.log("📩 New message:", { name, email});

  return { success: true };
}
