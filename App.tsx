import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview"

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <WebView source={{ uri: "https://gymagotchi.nandoburgos.dev" }} textZoom={100} originWhitelist={["*"]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})

export default App