import { useKeepAwake } from "expo-keep-awake"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { WebView } from "react-native-webview"
import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper"
import { Loading } from "./Loading"
import { useState, useRef, useEffect } from "react"
import { BackHandler } from "react-native"

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#0078d4",
        secondary: "yellow",
    },
}

const App = () => {
    useKeepAwake()
    const webViewRef = useRef(null)

    const [loadingProgess, setLoadingProgess] = useState(0)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const backAction = () => {
            // @ts-ignore
            webViewRef.current?.goBack()
            return true
        }

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

        return () => backHandler.remove()
    }, [])

    return (
        <PaperProvider theme={theme}>
            <View style={{ flex: 1 }}>
                <StatusBar style="light" />
                {!loaded && <Loading progress={loadingProgess} />}
                <WebView
                    ref={webViewRef}
                    // source={{ uri: "http://192.168.18.5:5173/" }}
                    source={{ uri: "https://gymagotchi.nandoburgos.dev" }}
                    textZoom={100}
                    originWhitelist={["*"]}
                    onLoadProgress={({ nativeEvent }) => setLoadingProgess(nativeEvent.progress)}
                    onLoadEnd={() => setTimeout(() => setLoaded(true), 1000)}
                />
            </View>
        </PaperProvider>
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
