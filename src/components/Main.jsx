import { Container } from "@chakra-ui/react";

export default function Main({ children, customStyle }) {
  return (
    <main className={`${customStyle}`}>
      <Container maxW="1024px">{children}</Container>
    </main>
  );
}
