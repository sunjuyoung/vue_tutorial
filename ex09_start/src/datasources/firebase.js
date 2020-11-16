//앱 객체 가져오기
import firebase from 'firebase/app'
//패키지 모듈 가져오기
import 'firebase/firebse-database'

//db초기화, 연결
const oDB = firebase.initializeApp({
    databaseURL: "https://pwa-to-do-bd0d1.firebaseio.com",
}).database();

//파이어베이스 db객체 중에서 todos항목을 다른 곳에서 사용하도록 공개
export const oTodosinDB = oDB.ref('todos');