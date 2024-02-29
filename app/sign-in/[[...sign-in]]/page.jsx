import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-14">
      <h2 className="text-2xl font-semibold text-center mb-6">
        LOGIN TO YOUR ACCOUNT
      </h2>
      <SignIn />;
    </div>
  );
}
