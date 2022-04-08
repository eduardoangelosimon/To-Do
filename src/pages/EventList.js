import { StyleSheet, View } from 'react-native';
import RegistrationModal from '../components/RegistrationModal';

export default function EventList() {
  return (
    <>
      <View style={styles.container}>
        <RegistrationModal/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    paddingTop: 20
  },
})