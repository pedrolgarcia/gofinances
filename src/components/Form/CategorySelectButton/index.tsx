import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Category, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

function CategorySelectButton({ title, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}

export default CategorySelectButton;
