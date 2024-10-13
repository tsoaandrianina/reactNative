import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Merci </ThemedText>
      </ThemedView>
      <ThemedText>Merci pour le test. Voici quelques explications concernant cette application.</ThemedText>
      <Collapsible title="React Native">
        <ThemedText>
        Cette application a été développée en utilisant React Native, permettant ainsi une expérience mobile fluide et performante. Grâce à cette technologie, l'application est compatible avec Android et iOS.{' '}
        </ThemedText>
     
 
      </Collapsible>
      <Collapsible title="Firebase">
        <ThemedText>
        Cette application utilise Firebase pour la gestion de la base de données et des API, offrant ainsi une solution en temps réel pour le stockage des données et l'authentification des utilisateurs.{' '}
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
