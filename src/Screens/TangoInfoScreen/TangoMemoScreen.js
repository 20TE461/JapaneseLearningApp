import { Button, Modal,StyleSheet,Text, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useContext, useEffect, useState } from "react";
import { MemoCtx } from "../../Store/context/memo-context";

export default function TangoMemoScreen({isShow, setIsShow, tangoId}) {
  const memoCtx = useContext(MemoCtx); 
  const [saveSuccess, setSaveSuccess] = useState(null); //bool
  const [tmpMemo, setTmpMemo] = useState(null); //string

  function MemoInputBox() {
    return (
      <View style={styles.MemoInputBox}>
        <TextInput
          placeholder="メモの入力..."
          multiline={true}
          style={styles.memoInput}
          onChangeText={(input)=>{setTmpMemo(input)}}
          defaultValue={memoCtx.currentMemo}
          />
      </View>
    );
  }

  function onPressHandler() {
    try {
      memoCtx.setMemo(tmpMemo);
      setSaveSuccess(true);
    } catch (err) {
      setSaveSuccess(false);
      console.error(err);
    }
  }

  function renderSaveStatus(status) {
    return <AntDesign 
              name={status ? 'checkcircle':'closecircle'} 
              size={15} 
              color={status ? "green" : "red"}
              >{status ? ' 保存完了':' 保存失敗'}
            </AntDesign>; 
  }
  
  return (
    <Modal visible={isShow ? true:false} transparent={true} animationType='slide'>
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.closeIcon}>メモ</Text>
          {saveSuccess !== null ? renderSaveStatus(saveSuccess):null}
          <AntDesign 
            name='close' 
            style={styles.closeIcon} 
            onPress={()=>{setIsShow(false)}}
            />
        </View>
        <View style={styles.body}>
          {MemoInputBox()}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {

  },
  MemoInputBox: {
    flex: 3,
    margin: 10,
    paddingHorizontal: 10,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  memoInput: {
    flex: 1,
    fontSize: 17,
  }
})