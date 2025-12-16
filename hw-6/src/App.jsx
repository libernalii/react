import { useState } from 'react'
import { users as initialUsers } from './mocks/users'

import './App.scss'
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';

function App() {
  // користувачі
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : initialUsers;
  });

  // поточний користувач
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  // модалки
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);


  const handleLogin = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    )

    if (!foundUser) {
      return "Невірний email чи пароль!"
    }

    if (foundUser.isBlocked) {
      return "Ваш аккаунт заблоковано адмістратором!"
    }

    setCurrentUser(foundUser);
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    setIsLoginModalOpen(false);
    return null;
  }

  const handleRegister = (email, password, repeatPassword) => {
    if (!email || !password) {
      return "Заповніть всі поля";
    }

    const isEmailExists = users.some((u) => u.email === email);

    if (isEmailExists) {
      return "Користувач з таким email вже існує";
    }

    if (password !== repeatPassword) {
      return "Паролі не співпадають";
    }

    const newUser = {
      id: crypto.randomUUID(),
      email,
      password,
      role: "user",
      isBlocked: false,
    };

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    setCurrentUser(newUser);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    setIsRegisterModalOpen(false);
    return null;
  }

  const toggleLock = (id) => {
    const updatedUsers = users.map((u) =>
      u.id === id ? { ...u, isBlocked: !u.isBlocked } : u
    );

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className='app'>
      <Header
        currentUser={currentUser}
        onLoginModalOpen={() => setIsLoginModalOpen(true)}
        onRegisterModalOpen={() => setIsRegisterModalOpen(true)}
        onLogout={() => setCurrentUser(null)}
      />

      {isLoginModalOpen && (
        <LoginModal
          onClose={() => setIsLoginModalOpen(false)}
          onSuccessLogin={handleLogin}
        />
      )}

      {isRegisterModalOpen && (
        <RegisterModal
          onClose={() => setIsRegisterModalOpen(false)}
          onRegister={handleRegister}
        />
      )}


      <main>
        {!currentUser && <p className='info'>Будь ласка, авторизуйтеся</p>}

        {currentUser?.role === "admin" && (
          <AdminPanel users={users} toggleLock={toggleLock} />
        )}
        {currentUser?.role === "user" && (
          <UserPanel user={currentUser} />
        )}
      </main>
    </div>
  )
}

export default App
