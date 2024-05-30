import React, { useState } from 'react';
import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from '../database/firebaseconfig'; // Certifique-se de que o caminho está correto

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Gera uma nova referência de documento com ID automático
      const newDocRef = doc(collection(db, "users"));

      // Define os dados do novo usuário
      await setDoc(newDocRef, {
        name: name,
        email: email,
      });

      console.log("Document written with ID: ", newDocRef.id);

      // Limpa os campos do formulário após o envio
      setName('');
      setEmail('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
