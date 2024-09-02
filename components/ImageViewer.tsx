import { Image, ImageSourcePropType, StyleSheet } from "react-native";

export default function ImageViewer({ selectedImage }: {selectedImage?: string | null }) {
    const placeholderImageSource: ImageSourcePropType = require('../assets/images/background-image.png');
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;
    return (
        <Image source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
}); 