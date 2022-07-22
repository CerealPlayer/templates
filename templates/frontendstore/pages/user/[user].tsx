import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { signOut } from "next-auth/react";
import ActionButton from "../../components/UI/btns/ActionButton";
import Section from "../../components/UI/containers/Section";
import { useUserData } from "../../hooks/useUserData";

export default function AccountPage() {
  const { userData: data, error, isLoading } = useUserData()
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
  const token = await getToken(context);
  const query = context.params?.user;
  if (token?.name !== query) {
    return {
      redirect: {
        destination: "/?error=auth",
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}