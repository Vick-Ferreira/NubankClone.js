const { exec } = require('child_process');

// Iniciar o servidor Express no diretório 'serverweb' na porta 5000
const expressProcess = exec('npm start', { cwd: 'serverweb' });

// Iniciar o servidor JSON no diretório 'serverApi' na porta 3000
const jsonServerProcess = exec('npm start', { cwd: 'serverApi' });

// Lidar com qualquer encerramento de processos quando você quiser parar a execução.
process.on('SIGINT', () => {
  expressProcess.kill();
  jsonServerProcess.kill();
});
