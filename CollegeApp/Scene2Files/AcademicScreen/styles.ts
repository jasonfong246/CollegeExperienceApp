import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  dialogueBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
  dialogueText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
  },
  choiceContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  choiceText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
  },
});

export default styles;