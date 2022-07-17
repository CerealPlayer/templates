import { useSession, signOut } from "next-auth/react";
import ActionButton from "../components/UI/btns/ActionButton";
import Section from "../components/UI/containers/Section";

export default function AccountPage() {
  const { data } = useSession();
  // Query user data with name and email from auth token
  return (
    <Section>
      <div className="flex justify-center items-center">
        {/* Provisional */}
        <div>
          <h1>Work In Progress</h1>
          <ActionButton
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          >
            Sign Out
          </ActionButton>
        </div>
      </div>
    </Section>
  );
}
