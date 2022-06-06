import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import ActionButton from "../components/UI/ActionButton";
import Section from "../components/UI/Section";

export default function AccountPage() {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
