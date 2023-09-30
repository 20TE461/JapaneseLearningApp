import { Button, Modal,StyleSheet,Text, TextInput, View } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
import { AntDesign } from '@expo/vector-icons'; 
import { useContext, useEffect, useState } from "react";
import { MemoCtx } from "../../Store/context/memo-context";

export default function TangoMemoScreen({isShow, setIsShow, tangoId}) {
  const memoCtx = useContext(MemoCtx); 
  const [currentMemo, setCurrentMemo] = useState(null);
  const memoKey = `memo_tango_${tangoId}`;

  useEffect(()=>{
    memoCtx.getMemo(memoKey).then((res)=>{
      setCurrentMemo(res);
    });
  },[]);

  function MemoInputForm() {
    return (
      <View style={styles.memoInputForm}>
        <TextInput
          placeholder="メモの入力..."
          multiline={true}
          style={styles.memoInput}
          onChangeText={(input)=>{setCurrentMemo(input)}}
          defaultValue={currentMemo}
          />
      </View>
    );
  }

  function onPressHandler() {
    memoCtx.setMemo({id: memoKey,content: currentMemo});
    setIsShow(false);
  }
  
  return (
    <Modal visible={isShow ? true:false} transparent={true} animationType='slide'>
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.closeIcon}>メモ</Text>
          <AntDesign 
            name='close' 
            style={styles.closeIcon} 
            onPress={()=>{setIsShow(false)}}
            />
        </View>
        <View style={styles.body}>
          {MemoInputForm()}
        <View style={styles.footer}>
          <Button 
            title="保存" 
            onPress={onPressHandler}
            />
        </View>
        </View>
      </View>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: '#bebebe',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // opacity: 0.75
  },
  innerContainer: {
    flex: 1,
    width: '85%',
    maxHeight: '60%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    opacity: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5
  },
  closeIcon: {
    fontSize: 25,
    color: '#000',
  },
  body: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {

  },
  memoInputForm: {
    flex: 3,
    margin: 10,
    paddingHorizontal: 10,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10,
  },
  memoInput: {
    flex: 1,
    fontSize: 17,
  }
})