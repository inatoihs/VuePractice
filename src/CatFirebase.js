import { addDoc,collection,serverTimestamp, getDocs, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { firebaseApp } from "./firebase";

//猫の情報をアップロードする関数。filedata(写真)だけじゃなくて設計に従って猫のIDとか柄とかも入れる
//addDoc(collection(dbfirestore, "test"), {
//    username: "Ada",
//  });みたいな感じでfirebaseにデータを送れる
export const uploadCat=(fileData)=>{
  const metadata={
    contentType: 'image/jpeg',
  }
  const storage = getStorage();
  const imageRef = ref(storage, '/' + 'test');//testの部分は猫のIDにする。その他も同様
  uploadBytesResumable(imageRef, fileData, metadata)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          addDoc(collection(getFirestore(), "test"), {
            filePath : url,
            createDate: serverTimestamp()
          })
            .then(()=>{
              console.log('success')
            })
            .catch((e)=>{
              console.log('fail',e)
            })
        });
    })
    .catch((error) => {
      console.error('Upload failed', error);
    });
}

//猫の情報を持ってくる関数。これはまだいじってないので、ちゃんと動かすには色々変える必要がある
export const downloadCat=async()=>{
  const data =[]
  const querySnapshot = await getDocs(collection(getFirestore(firebaseApp), "test"))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data())
  })
  return data
}