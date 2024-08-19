// import signIn from '@/app/(auth)/sign-in';
import { Client, Account, ID, Databases, Avatars, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.waltech.wemeet',
    projectId: '66c1ede600223bc0b62d',
    databaseId: '66c1ef9500079834eb75',
    userCollectionId: '66c22e14003e4e07a672',
    patientCollectionId: '66c1efc900093274387e',
    hopitalCollectionId: '66c1efdc002f98b25cfb',
    docteurCollectionId: '66c1efd50017faaa024d',
    appointmentCollectionId: '66c1efef000e542a6994',
    storageId: '66c1f86a0008b9b77782'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;


const account = new Account(client);
const db = new Databases(client);
const avatars = new Avatars(client)


export const createPatient = async (nom, postnom, email, role, mdp, profil_link) =>{

    // Register Patient
    try {

        const newAccount = await account.create(
            ID.unique(),
            email,
            mdp,
            `${nom} ${postnom}`
        )
        
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(`${nom} ${postnom}`)
        
        await signIn(email, mdp)

        const newUser = await db.createDocument(
            appwriteConfig.databaseId, 
            appwriteConfig.patientCollectionId,
            ID.unique(),
            {
                nom: nom,
                postnom: postnom,
                email: email,
                role: "Patient",
                mdp: mdp,
                profile_link: avatarUrl,
                patientId: newAccount.$id
            }
        )

        return newUser

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }  
}

export const signIn = async (email, mdp) => {
    try {
        const patient_session = account.createEmailPasswordSession(email, mdp)
        console.log("+++++++++++++++++++++++++++++++++ sign in token : "+JSON.stringify(patient_session))
        return patient_session
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()

        console.log("+++++++++++++++++++++++++++++++++ currentAcount : "+JSON.stringify(currentAccount))

        if(!currentAccount) throw Error;

        const currentUser = await db.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.patientCollectionId,
            [
                Query.equal('patientId'+"", currentAccount.$id)
            ]
        )

        console.log("+++++++++++++++++++++++++++++++++ currentUser : "+JSON.stringify(currentUser)+" id : "+currentAccount.$id)

        if(!currentUser) throw Error

        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
    }
}
