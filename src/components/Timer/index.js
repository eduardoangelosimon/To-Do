import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import transformInDays from '../../utils/transformInDays';

export default function Clock({ item, handleRemoveEvent }) {
  return (
    <View style={styles.containerNumbers}>
      <Text style={styles.eventTitle}>
        {item.title}
      </Text>
      <CountDown
        style={styles.countdown}
        until={transformInDays(item.days)}
        digitStyle={{ backgroundColor: "rgba(00, 0, 210,0.5)" }}
        digitTxtStyle={{ color: '#FFF' }}
        size={25}
      />

      <View>
        <View>
          <Text style={styles.information}>
            <Text style={styles.descriptionTitle}>Descrição:</Text>
            {'\n'}
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRemoveEvent()}
        >
          <Text style={styles.text}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerNumbers: {
    marginTop: 16,
    marginBottom: 8,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    padding: 15,
    borderRadius: 20,
    maxWidth: 325,
    minWidth: 325
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 10,
  },
  descriptionTitle: {
    fontWeight: "bold",
  },
  information: {
    marginTop: 8,
    fontSize: 18,
  },
  button: {
    maxWidth: 100,
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
    backgroundColor: '#e30021',
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
});