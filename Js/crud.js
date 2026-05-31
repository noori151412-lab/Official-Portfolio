import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const colRef = collection(db, "projects");

// 1. Get All Projects
export const getProjects = async () => {
    const q = query(colRef, orderBy("createdAt", "desc"));
    return await getDocs(q);
};

// 2. Add New Project
export const createProject = async (title, link, imageUrl) => {
    return await addDoc(colRef, {
        title,
        link,
        imageUrl,
        createdAt: new Date()
    });
};

// 3. Update Existing Project
export const updateProject = async (id, data) => {
    const docRef = doc(db, "projects", id);
    return await updateDoc(docRef, data);
};

// 4. Delete Project
export const deleteProjectDoc = async (id) => {
    const docRef = doc(db, "projects", id);
    return await deleteDoc(docRef);
};