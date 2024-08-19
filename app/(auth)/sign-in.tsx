import React, { useState } from "react";
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Box, Select, CheckIcon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Text } from "react-native";
import { Link, router } from "expo-router";
import Button from "@/components/CustomBustom";
import { signIn } from "@/lib/appwrite";

const SignIn = () => {

 const [isSubmitting, setIsSubmitting] = useState(false)

 const [form, setForm] = useState({
    email:'',
    pwd:''
 })

  const [show, setShow] = React.useState(false);
  const [role, setRole] = React.useState("");

  const submit = async () => {

    if(!form.email || !role || !form.pwd) {
        Alert.alert('Error', 'Please fill in all the fields')
    }

    setIsSubmitting(true)

    try {
        await signIn(form.email, form.pwd)

        //set it to the global state : using context ```this will remeber if the user is logged in then redirect him to the home page

        router.replace('/home')
    } catch (error) {
        Alert.alert('Error', error.message)
    } finally {
        setIsSubmitting(false)
    }
  }

  return <Stack space={4} w="100%"alignItems="center">

    <Text className='font-ilight text-2xl'>Bienvenue dans WEMEET</Text>

    <Text className='font-ilight '>Vous n’avez pas de compte? <Link href="/sign-up" className='text-primary text-md font-isemibold'>Crée</Link> </Text>

    <Input 
        w={{ base: "75%", md: "25%"}} 
        InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
        placeholder="Email" 
        onChangeText={(e) => setForm({ ...form, email: e})}
    />
    
    <Input w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Password" onChangeText={(e) => setForm({ ...form, pwd: e})} />
    
    <Select selectedValue={role} minWidth="75%" accessibilityLabel="Choisir un role" placeholder="Choisir un role" _selectedItem={{
    bg: "teal.600",
    endIcon: <CheckIcon color="muted.400" size="5" />
    }} mt={1} onValueChange={itemValue => setRole(itemValue)}>
        <Select.Item label="Patient" value="patient" />
        <Select.Item label="Docteur" value="docteur" />
    </Select>

    <Button
          title="Se connecté" 
          handlePress={submit} 
          containerStyles="bg-primary w-[75%]" 
          textStyles={undefined} isLoading={undefined}    />

    </Stack>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="1">
                <SignIn />
            </Center>
          </NativeBaseProvider>
        );
    };
    