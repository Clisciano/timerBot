import { CronJob } from 'cron';
import { exec } from 'child_process';
import path from 'path';
 
const scriptPath = path.join(path.dirname(new URL(import.meta.url).pathname), 'script.php');
const phpCommand = `php ${scriptPath}`; // Comando para executar o script PHP

// s m h day of month month day of week
const job = new CronJob('0 54 11 * * *', function() { 
  
    exec(phpCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o script PHP: ${error}`);
        return;
      }
  
      console.log(`Saída do script PHP: ${stdout}`);
    });
  });
  
  job.start();

