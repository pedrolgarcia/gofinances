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
  TransactionList,
} from "./styles";

import HighlightCard from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper";

export default function Dashboard() {
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "13/04/2021",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "13/04/2021",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "13/04/2021",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "13/04/2021",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "13/04/2021",
      category: {
        icon: "dollar-sign",
        name: "Vendas",
      },
    },
  ];

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

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
      </Transactions>
    </Container>
  );
}
