import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from 'react-native';
import styles from "../screens/Style";
import { BatLogo } from "../components/BatLogo/BatLogo";
import { BatTextInput } from "../components/BatTextInput/BatInput";
import { BatButton } from "../components/BatButton/BatButton";

const Home = () => {
    return (    
         <View style={styles.appcontainer}>
            <SafeAreaView/>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            <View style={styles.inputContainer}>
                <BatButton/>
            </View>
          
                <StatusBar style="light"/>
         </View>
    );
}


export default Home;

