import React from "react";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
} from "./styles";

import HighlightCard from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/29722492?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Pedro</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionCard />
      </Transactions>
    </Container>
  );
}
