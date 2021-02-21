import firebase from "./firebase"
export const auth = firebase.auth()
export const providerGoogle= new firebase.auth.GoogleAuthProvider()
export const providerGithub= new firebase.auth.GithubAuthProvider()
export const providerFacebook= new firebase.auth.FacebookAuthProvider()