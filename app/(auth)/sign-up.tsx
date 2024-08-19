import React, { useState } from "react";
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Box, Select, CheckIcon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Text } from "react-native";
import { Link, router } from "expo-router";
import Button from "@/components/CustomBustom";

import { createPatient } from "@/lib/appwrite"

const SignUp = () => {
  const [form, setForm] = useState({
    nom: '',
    postnom: '',
    email:'',
    role: '',
    specialite:'',
    pwd1:'',
    pwd2:''
  })

  const [show, setShow] = React.useState(false);
  const [spec1, setSpec1] = React.useState("");
  const [spec2, setSpec2] = React.useState("");

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {

    if(!form.email || !form.nom || !form.postnom || !form.pwd1 || !form.pwd2) {
        Alert.alert('Error', 'Please fill in all the fields')
    }

    setIsSubmitting(true)

    try {
        const result = await createPatient(form.nom, form.postnom, form.email, form.role, form.pwd1, null)

        //set it to the global state : using context

        router.replace('/home')
    } catch(error) {
        Alert.alert('Error', error.message)
    } finally {
        setIsSubmitting(false)
    }
  }

  return <Stack space={4} w="100%" alignItems="center">

    <Text className='font-ilight text-2xl'>Crée un compte</Text>

    <Text className='font-ilight '>Vous avez deja un compte? <Link href="/sign-in" className='text-primary text-md font-isemibold'>Se connecté  </Link> </Text>

    <Input w={{
      base: "75%",
      md: "25%"
    }} placeholder="Nom" onChangeText={(e) => setForm({ ...form, nom: e})} />

    <Input w={{
      base: "75%",
      md: "25%"
    }} placeholder="Postnom" onChangeText={(e) => setForm({ ...form, postnom: e})} />

    <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Email" onChangeText={(e) => setForm({ ...form, email: e})}/>
    
    <Select selectedValue={spec1} minWidth="75%" accessibilityLabel="Choisir un role" placeholder="Choisir un role" _selectedItem={{
    bg: "teal.600",
    endIcon: <CheckIcon color="muted.400" size="5" />
    }} mt={1} onValueChange={itemValue => setSpec1(itemValue)}>
        <Select.Item label="Patient" value="patient" />
        <Select.Item label="Docteur" value="docteur" />
    </Select>

    {spec1 === 'docteur' && (
        <Select selectedValue={spec2} minWidth="75%" accessibilityLabel="Choisir une specialité" placeholder="Choisir une specialité" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon color="muted.400" size="5" />
        }} mt={1} onValueChange={itemValue => setSpec2(itemValue)}>
            <Select.Item label="Dentiste" value="Dentiste" />
            <Select.Item label="Geneticien" value="Geneticien" />
            <Select.Item label="Neurologue" value="Neurologue" />
        </Select>
    )}

    <Input w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Password" onChangeText={(e) => setForm({ ...form, pwd1: e})} />

    <Input w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Confirm Password" onChangeText={(e) => setForm({ ...form, pwd2: e})} />

    <Button
        title="Cree un compte" 
        handlePress={submit} 
        containerStyles="bg-primary w-[75%]" 
        textStyles={undefined} isLoading={isSubmitting}
    />

    </Stack>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="1">
                <SignUp />
            </Center>
          </NativeBaseProvider>
        );
    };
    