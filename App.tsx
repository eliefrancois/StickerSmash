import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';


export default function App() {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {

  }

  const onSaveImageAsync = async () => {
    
  }


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You need to provide a photo");
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer selectedImage={pickedImage} />
        {showAppOptions ? (
                  <View style={styles.optionsContainer}>
                  <View style={styles.optionsRow}>
                    <IconButton icon="refresh" label="Reset" onPress={onReset} />
                    <CircleButton onPress={onAddSticker} />
                    <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                  </View>
                </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button
              theme="primary"
              label="Choose a photo"
              onPress={pickImageAsync}
            />
            <Button
              theme="secondary"
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex:1,
    paddingTop: 58,
    alignItems: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

});
