import React, { useEffect } from "react"
import { View } from "react-native"
import { ActivityIndicator, ProgressBar, Text } from "react-native-paper"

interface LoadingProps {
    progress: number
}

export const Loading: React.FC<LoadingProps> = ({ progress }) => {
    useEffect(() => {
        console.log({ progress })
    }, [progress])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#121212",
                justifyContent: "center",
                zIndex: 5,
                position: "absolute",
                height: "100%",
                width: "100%",
                // alignItems: "center",
            }}
        >
            <Text style={{ color: "#0078d4", position: "absolute", top: "5%", alignSelf: "center", fontSize: 40 }}>Gymagotchi</Text>
            <ProgressBar progress={progress} color={"#0078d4"} style={{ width: "70%", height: 10, alignSelf: "center", borderRadius: 5 }} />
        </View>
    )
}
