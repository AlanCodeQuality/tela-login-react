import React, { useState } from 'react'; 
import Button from './ui/Button';  
import Input from './ui/Input';   
import { Mail, Lock } from 'lucide-react'; 

const LoginScreen = () => {

  // useState é usado para criar o estado dos campos de e-mail e senha
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  // Função para manipular o evento de login, chamada ao submeter o formulário
  const handleLogin = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário
    console.log('Login attempt:', { email, password }); // Exibe os dados de login no console
  };

  return (
    // Estrutura principal do layout, uma div flexível para centralizar o conteúdo
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     
      {/* Container do formulário de login com estilo de cartão */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
       
        {/* Div para centralizar a imagem (logo) */}
        <div className="flex justify-center">
          {/* A imagem da logo com a classe de altura e margem inferior */}
          <img 
            src="https://i.postimg.cc/T1v0g0FQ/logoCar.jpg" 
            alt="Logo" 
            className="h-16 mb-4" 
          />
        </div>
       
        {/* Título do formulário de login */}
        <h2 className="text-2xl font-bold text-center">Login</h2>
       
        {/* Formulário com onSubmit para chamar a função handleLogin quando enviado */}
        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* Campo para o e-mail */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">E-mail</label>
            <div className="relative">
              {/* Ícone de e-mail que fica posicionado dentro do campo de input */}
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              {/* Campo de entrada de e-mail */}
             
             
              <Input 
                type="email"
                id="email"
                placeholder="seu-email@exemplo.com"
                className="pl-10" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail
                required // Torna o campo obrigatório
              />
            </div>
          </div>
          
          {/* Campo para a senha */}
          <div>
           
            <label htmlFor="password" className="block mb-2 text-sm">Senha</label>
            <div className="relative">
             
              {/* Ícone de senha dentro do campo de input */}
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              
              {/* Campo de entrada de senha */}
              
              <Input 
                type="password"
                id="password"
                placeholder="Digite sua senha"
                className="pl-10" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                required // Torna o campo obrigatório
              />
            </div>
          </div>
          
          {/* Botão de envio, chama a função handleLogin ao ser clicado */}
          <Button 
            type="submit" 
            className="w-full" 
            onClick={handleLogin} // Chama a função handleLogin ao clicar
          >
            Entrar
          </Button>

          {/* Link para recuperação de senha */}
          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Esqueceu sua senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
