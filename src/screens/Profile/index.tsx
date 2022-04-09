import React from "react";

import { View, Text, TextInput, Button } from "react-native";

function Profile() {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Pedro"
      />

      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"
        autoCorrect={false}
        value="Lopes"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}

export default Profile;
