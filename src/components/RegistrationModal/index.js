import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, ScrollView } from "react-native";
import Timer from "../Timer";

const RegistrationModal = () => {

  const [days, setDays] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [listDays, setListDays] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function checkValidInputs() {

    if (!title.trim()) {
      alert('Por favor, adicione um título!');
      setModalVisible(true);
      return;
    }

    if (!description.trim()) {
      alert('Por favor, adicione uma descrição!');
      setModalVisible(true);
      return;
    }

    if (!days.trim()) {
      alert('Por favor, adicione a quantidade de dias até o evento!');
      setModalVisible(true);
      return;
    }

    if (typeof days !== "number") {
      alert('Por favor, informe a data como um número!');
      setModalVisible(true);
      return;
    }

    Alert.alert("Evento criado com sucesso");
    clearAllInputs();
    setModalVisible(false);
    handleAddEvent();
  };

  function handleInputTitle(text) {
    setTitle(text);
  }

  function handleInputDescription(text) {
    setDescription(text);
  }

  function handleInputDays(numeric) {
    setDays(numeric);
  }

  function handleAddEvent() {
    listDays.push({
      id: listDays.length + 1,
      days,
      title,
      description,
    });
    setListDays(listDays);
  }

  function clearAllInputs() {
    setDays('');
    setTitle('');
    setDescription('');
  }

  function handleRemoveEvent(id) {
    const removedEvent = listDays.filter(item => item.id !== id);
    setListDays(removedEvent)
  }

  // function openCalendar() {

  // }

  return (
    <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          presentationStyle={"overFullScreen"}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.overlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Cadastre um evento</Text>
              <TextInput 
                style={styles.modalInput} 
                autoFocus={true} 
                placeholder="Nome do evento"
                value={title}
                onChangeText={handleInputTitle}
              />

              <TextInput 
                style={styles.modalInput} 
                placeholder="Descrição do evento"
                value={description}
                onChangeText={handleInputDescription}
              />

              <TextInput 
                style={styles.modalInput}
                keyboardType="numeric"
                placeholder="Número de dias até o evento"
                value={days}
                onChangeText={handleInputDays}
              />

              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    clearAllInputs();
                    // openCalendar();
                  }}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonCreate]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    checkValidInputs();
                  }}
                >
                  <Text style={styles.textStyle}>Criar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Adicionar evento</Text>
        </Pressable>

        <ScrollView showsVerticalScrollIndicator={false}>
            {listDays.map((listDay) => (
              <Timer
                key={listDay.id}
                item={listDay}
                handleRemoveEvent={() => handleRemoveEvent(listDay.id)}
              />
            ))}
          </ScrollView>
      </View>

  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
    marginBottom:20
  },
  buttonClose: {
    backgroundColor: "#e30021",
    marginRight: 10
  },
  buttonCreate: {
    backgroundColor: "#33a336",
  },
  modalButtons: {
    flexDirection: "row",
  },
  textStyle: {
    color: "#f9f9f9",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalInput: {
    padding: 10,
    minWidth: "80%%",
    borderRadius: 20,
    marginBottom: 15,
    color: "#999999",
    backgroundColor: "#d9d9d9",
    textAlign:"center",
  },
});

export default RegistrationModal;