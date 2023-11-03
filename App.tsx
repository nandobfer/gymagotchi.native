import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview"

const App = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "red" }}>
            <WebView source={{ uri: "https://gymagochi.nandoburgos.dev" }} textZoom={100} originWhitelist={["*"]} />
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