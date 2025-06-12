import { useState } from 'react';

export default function FakeAuthDemo() {
  const [modal, setModal] = useState<'login' | 'register' | 'profile' | null>(null);
  const [role, setRole] = useState<'user' | 'mentor' | 'admin'>('user');

  return (
    <div className="flex flex-col items-end gap-4 mt-8">
      <div className="flex gap-2">
        <button onClick={() => setModal('login')} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Войти</button>
        <button onClick={() => setModal('register')} className="px-4 py-2 bg-gray-600 text-white rounded-lg">Регистрация</button>
        <button onClick={() => setModal('profile')} className="px-4 py-2 bg-green-600 text-white rounded-lg">Профиль</button>
      </div>
      {modal === 'login' && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-sm shadow-2xl relative">
            <button onClick={() => setModal(null)} className="absolute top-2 right-2 text-gray-400">✕</button>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Вход</h2>
            <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
            <input className="w-full mb-3 p-2 border rounded" placeholder="Пароль" type="password" />
            <button className="w-full bg-blue-600 text-white py-2 rounded mb-2">Войти</button>
            <button className="text-blue-500 underline w-full" onClick={() => setModal('register')}>Нет аккаунта? Зарегистрируйтесь</button>
            <button className="text-gray-500 underline w-full mt-2" onClick={() => alert('Ссылка для восстановления отправлена!')}>Забыли пароль?</button>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-gray-100 rounded p-2">Google</button>
              <button className="flex-1 bg-gray-100 rounded p-2">LinkedIn</button>
              <button className="flex-1 bg-gray-100 rounded p-2">Kakao</button>
            </div>
          </div>
        </div>
      )}
      {modal === 'register' && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-sm shadow-2xl relative">
            <button onClick={() => setModal(null)} className="absolute top-2 right-2 text-gray-400">✕</button>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Регистрация</h2>
            <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
            <input className="w-full mb-3 p-2 border rounded" placeholder="Пароль" type="password" />
            <input className="w-full mb-3 p-2 border rounded" placeholder="Повторите пароль" type="password" />
            <button className="w-full bg-gray-600 text-white py-2 rounded mb-2">Зарегистрироваться</button>
            <button className="text-blue-500 underline w-full" onClick={() => setModal('login')}>Уже есть аккаунт? Войти</button>
          </div>
        </div>
      )}
      {modal === 'profile' && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-sm shadow-2xl relative">
            <button onClick={() => setModal(null)} className="absolute top-2 right-2 text-gray-400">✕</button>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Профиль пользователя</h2>
            <div className="mb-2">Email: <span className="font-mono">user@email.com</span></div>
            <div className="mb-2">Роль: <span className="font-bold">{role === 'user' ? 'Пользователь' : role === 'mentor' ? 'Ментор' : 'Админ'}</span></div>
            <button className="w-full bg-yellow-500 text-white py-2 rounded mb-2" onClick={() => alert('Ссылка для смены пароля отправлена!')}>Сменить пароль</button>
            <button className="w-full bg-gray-300 text-gray-700 py-2 rounded mb-2" onClick={() => setRole(role === 'user' ? 'mentor' : role === 'mentor' ? 'admin' : 'user')}>Сменить роль</button>
            <button className="w-full bg-red-500 text-white py-2 rounded" onClick={() => setModal(null)}>Выйти</button>
          </div>
        </div>
      )}
    </div>
  );
} 